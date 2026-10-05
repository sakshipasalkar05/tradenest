const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { starterHoldings, starterPositions } = require("../data/starterData");

module.exports.seedUserData = async (userId) => {
  await HoldingsModel.insertMany(
    starterHoldings.map((item) => ({ ...item, user: userId }))
  );
  await PositionsModel.insertMany(
    starterPositions.map((item) => ({ ...item, user: userId }))
  );
};