const { UserModel } = require("../model/UserModel");

const MAX_AMOUNT = 1000000; // limit per transaction

const round2 = (n) => Math.round(n * 100) / 100;

module.exports.getFunds = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ balance: user.balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.addFunds = async (req, res) => {
  try {
    const amount = Number(req.body.amount);
    if (!(amount > 0) || amount > MAX_AMOUNT) {
      return res.status(400).json({ message: "Enter a valid amount" });
    }

    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.balance = round2(user.balance + amount);
    await user.save();

    res.json({ balance: user.balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.withdrawFunds = async (req, res) => {
  try {
    const amount = Number(req.body.amount);
    if (!(amount > 0) || amount > MAX_AMOUNT) {
      return res.status(400).json({ message: "Enter a valid amount" });
    }

    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (amount > user.balance) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    user.balance = round2(user.balance - amount);
    await user.save();

    res.json({ balance: user.balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};