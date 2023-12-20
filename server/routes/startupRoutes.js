// routes/startupRoutes.js

const express = require("express");
const router = express.Router();
const {
  getAllStartups,
  addStartup,
  getDistinctIndustry,
  searchIndustry,
} = require("../controllers/startupController");

// Route to get all startups
router.get("/startups", getAllStartups);

// Route to add a new startup
router.post("/startups", addStartup);

// Route to find distinct Industry Type
router.get("/getIndustry", getDistinctIndustry);

// Route to find distinct Industry Type
router.get("/startups/search", searchIndustry);

module.exports = router;
