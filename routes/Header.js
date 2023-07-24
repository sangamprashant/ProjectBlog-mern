const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Jwt_secret = process.env.JWT_SECRET;
const PROJECTBLOGHEAD = mongoose.model("PROJECTBLOGHEAD");
const requireLoginAdmin = require("../middleware/requireLogin");

// PUT route for updating an existing user profile
router.put(
  "/api/admin/userprofile/:userId",
  requireLoginAdmin,
  async (req, res) => {
    try {
      const userId = req.params.userId;
      const { name, email, profession, location, avatarUrl } =
        req.body.textFields;
      // Check if the user profile exists in the database
      const existingUser = await PROJECTBLOGHEAD.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ error: "User profile not found" });
      }
      // Update the user profile fields
      existingUser.name = name;
      existingUser.email = email;
      existingUser.profession = profession;
      existingUser.location = location;
      existingUser.avatarUrl = avatarUrl;
      // Save the updated user profile to the database
      const updatedUserProfile = await existingUser.save();
      if (updatedUserProfile) {
        return res.json({ message: "User profile updated successfully" });
      } else {
        return res.status(500).json({ error: "Failed to update user profile" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
);

// Route to get a single user profile
router.post("/api/get/userprofile", async (req, res) => {
  const { userName } = req.body;
  try {
    const userProfile = await PROJECTBLOGHEAD.findOne({ userName: userName });
    res.json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
