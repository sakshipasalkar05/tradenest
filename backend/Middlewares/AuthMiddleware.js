require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findById(data.id);
    if (user) {
      return res.json({ status: true, user: user.username });
    }
    return res.json({ status: false });
  } catch (error) {
    // token invalid or expired
    return res.json({ status: false });
  }
};

module.exports.requireAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findById(data.id);
    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    req.userId = user._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authenticated" });
  }
};