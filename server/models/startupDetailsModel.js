const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  Date: {
    type: String,
    required: true,
  },
  StartupName: {
    type: String,
    required: true,
  },
  IndustryVertical: {
    type: String,
    required: true,
  },
  SubVertical: {
    type: String,
    required: true,
  },
  CityLocation: {
    type: String,
    required: true,
  },
  InvestorsName: {
    type: String,
    required: true,
  },
  InvestmentType: {
    type: String,
    required: true,
  },
  AmountInUSD: {
    type: String,
  },
});

const Startup = mongoose.model("record", startupSchema);

module.exports = Startup;
