const {Schema} = require('mongoose');

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String, //buy or sell
    product: String, // CNC (delivery) or MIS (intraday)
    user: { type: Schema.Types.ObjectId, ref: "user", index: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = {OrdersSchema};