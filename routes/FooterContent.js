const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const PROJECTBLOGUSER = mongoose.model("PROJECTBLOGUSER");
const requireLogin = require("../middleware/requireLogin");
const PROJECTBLOGPROJECT = mongoose.model("PROJECTBLOGPROJECT");
const PROJECTBLOGFOOTERCONTENT = mongoose.model("PROJECTBLOGFOOTERCONTENT");

// Create a new Footercontent
router.post("/api/admin/add/Footercontent", async (req, res) => {
  try {
    const { content, userId } = req.body;

    // Check if the user already has a Footercontent
    const existingFootercontent = await PROJECTBLOGFOOTERCONTENT.findOne({
      user: userId,
    });

    if (existingFootercontent) {
      // Update the existing Footercontent with the new image URL
      existingFootercontent.content = content;
      const updatedFootercontent = await existingFootercontent.save();
      return res.json(updatedFootercontent);
    }

    // Create a new Footercontent document
    const newFootercontent = new PROJECTBLOGFOOTERCONTENT({
      content,
      user: userId,
    });

    // Save the new Footercontent to the database
    const savedFootercontent = await newFootercontent.save();

    res.status(201).json(savedFootercontent);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to create or update Footercontent" });
  }
});

// Get Footercontent by user ID
router.get("/api/Footercontent/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the Footercontent associated with the user ID
    const Footercontent = await PROJECTBLOGFOOTERCONTENT.findOne({
      user: userId,
    });

    if (!Footercontent) {
      return res.status(404).json({ error: "Footercontent not found" });
    }

    res.json(Footercontent);
  } catch (error) {
    res.status(500).json({ error: "Failed to get Footercontent" });
  }
});

module.exports = router;
