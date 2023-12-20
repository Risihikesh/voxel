// controllers/startupController.js

const Startup = require("../models/startupDetailsModel"); // Import the Startup model
const moment = require("moment");

// Controller to get all startups
const getAllStartups = async (req, res) => {
  try {
    const startups = await Startup.find(); // Fetch all startups from the database
    res.json(startups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to add a new startup
const addStartup = async (req, res) => {
  const formattedDate = moment(req.body.Date).format("DD/MM/YYYY");
  console.log(formattedDate);
  const startup = new Startup({
    Date: formattedDate,
    StartupName: req.body.StartupName,
    IndustryVertical: req.body.IndustryVertical,
    SubVertical: req.body.SubVertical,
    CityLocation: req.body.CityLocation,
    InvestorsName: req.body.InvestorsName,
    InvestmentType: req.body.InvestmentType,
    AmountInUSD: req.body.AmountInUSD,
  });

  try {
    const newStartup = await startup.save(); // Save the new startup to the database
    res.status(201).json(newStartup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getDistinctIndustry = async (req, res) => {
  const distinctIndustryVerticals = await Startup.distinct("IndustryVertical");

  res.json(distinctIndustryVerticals);
};

const searchIndustry = async (req, res) => {
  try {
    const { keyword } = req.query;
    let query = {};

    if (keyword) {
      query = {
        $or: [
          { StartupName: { $regex: keyword, $options: "i" } },
          { CityLocation: { $regex: keyword, $options: "i" } },
          { IndustryVertical: { $regex: keyword, $options: "i" } },
          // Add more fields as needed for the search
        ],
      };
    }

    const startups = await Startup.find(query);
    res.json(startups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllStartups,
  addStartup,
  getDistinctIndustry,
  searchIndustry,
};
