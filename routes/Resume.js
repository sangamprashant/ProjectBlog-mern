const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Types: { ObjectId } } = require('mongoose');
const PROJECTBLOGUSER = mongoose.model("PROJECTBLOGUSER");
const requireLogin = require("../middleware/requireLogin");
const PROJECTBLOGPROJECT = mongoose.model("PROJECTBLOGPROJECT");
const PROJECTBLOGRESUME = mongoose.model("PROJECTBLOGRESUME");

// Create a new resume
router.post('/api/admin/add/resume', async (req, res) => {
    try {
      const { imageUrl, userId } = req.body;
  
      // Check if the user already has a resume
      const existingResume = await PROJECTBLOGRESUME.findOne({ user: userId });
  
      if (existingResume) {
        // Update the existing resume with the new image URL
        existingResume.imageUrl = imageUrl;
        const updatedResume = await existingResume.save();
        return res.json(updatedResume);
      }
  
      // Create a new resume document
      const newResume = new PROJECTBLOGRESUME({
        imageUrl,
        user: userId,
      });
  
      // Save the new resume to the database
      const savedResume = await newResume.save();
  
      res.status(201).json(savedResume);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create or update resume' });
    }
  });

  // Get resume by user ID
router.get('/api/resume/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Find the resume associated with the user ID
      const resume = await PROJECTBLOGRESUME.findOne({ user: userId });
  
      if (!resume) {
        return res.status(404).json({ error: 'Resume not found' });
      }
  
      res.json(resume);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get resume' });
    }
  });


module.exports = router;