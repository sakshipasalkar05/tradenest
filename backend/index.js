require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const authRoute = require("./routes/AuthRoute");
const { requireAuth } = require("./middlewares/AuthMiddleware");
const fundsRoute = require("./routes/FundsRoute");

const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(helmet());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 20, // max 20 attempts per IP in that window
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many attempts. Please try again later." },
});

app.use("/login", authLimiter);
app.use("/signup", authLimiter);
app.use("/", authRoute);
app.use("/funds", fundsRoute);

app.get("/allHoldings", requireAuth, async (req, res) => {
    let allHoldings = await HoldingsModel.find({ user: req.userId });
    res.json(allHoldings);
}); 

app.get("/allPositions", requireAuth, async (req, res) => {
    let allPositions = await PositionsModel.find({ user: req.userId });
    res.json(allPositions);
}); 


const formatPercent = (value) =>
    (value >= 0 ? "+" : "") + value.toFixed(2) + "%";

app.post("/newOrder", requireAuth, async (req, res) => {
    try {
        const name = req.body.name;
        const qty = Number(req.body.qty);
        const price = Number(req.body.price);
        const mode = String(req.body.mode || "").toUpperCase();
        const product = String(req.body.product || "CNC").toUpperCase();

        if (
            !name ||
            !Number.isInteger(qty) || qty <= 0 ||
            !(price > 0) ||
            !["BUY", "SELL"].includes(mode) ||
            !["CNC", "MIS"].includes(product)
        ) {
            return res.status(400).json({ message: "Invalid order" });
        }

        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const orderValue = Math.round(qty * price * 100) / 100;

        // can the user afford this buy?
        if (mode === "BUY" && user.balance < orderValue) {
            return res.status(400).json({ message: "Insufficient funds" });
        }

        // delivery orders live in holdings, intraday orders live in positions
        const isIntraday = product === "MIS";
        const Model = isIntraday ? PositionsModel : HoldingsModel;
        const filter = isIntraday
            ? { user: req.userId, name, product: "MIS" }
            : { user: req.userId, name };

        const existing = await Model.findOne(filter);

        if (mode === "SELL") {
            if (!existing || existing.qty < qty) {
                return res.status(400).json({
                    message: isIntraday
                        ? "Not enough shares in your intraday position"
                        : "Not enough shares to sell",
                });
            }

            existing.qty -= qty;
            existing.price = price;
            existing.net = formatPercent(((price - existing.avg) / existing.avg) * 100);

            if (existing.qty === 0) {
                await existing.deleteOne();
            } else {
                await existing.save();
            }
        } else if (existing) {
            // buying more of something you already hold: new average cost
            const totalCost = existing.avg * existing.qty + price * qty;
            existing.qty += qty;
            existing.avg = totalCost / existing.qty;
            existing.price = price;
            existing.net = formatPercent(((price - existing.avg) / existing.avg) * 100);
            await existing.save();
        } else {
            await Model.create({
                user: req.userId,
                name,
                qty,
                avg: price,
                price,
                net: "+0.00%",
                day: "+0.00%",
                isLoss: false,
                ...(isIntraday && { product: "MIS" }),
            });
        }

        // buy takes money out, sell puts proceeds in
        const change = mode === "SELL" ? orderValue : -orderValue;
        user.balance = Math.round((user.balance + change) * 100) / 100;
        await user.save();

        await new OrdersModel({ name, qty, price, mode, product, user: req.userId }).save();

        res.send("Order saved");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.get("/allOrders", requireAuth, async (req, res) => {
    try {
        const orders = await OrdersModel.find({ user: req.userId }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.listen(PORT, ()=> {
    console.log("App started");
    mongoose.connect(uri);
    console.log("MongoDB connected");
});

