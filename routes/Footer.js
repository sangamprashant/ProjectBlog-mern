const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Jwt_secret = process.env.JWT_SECRET;
const PROJECTBLOGFOOTER = mongoose.model("PROJECTBLOGFOOTER");
const requireLoginAdmin = require("../middleware/requireLogin");

// Route to add project blog footer
router.post("/api/admin/add/footer", requireLoginAdmin, async (req, res) => {
  try {
    const { icon, link, name } = req.body;

    // Validate the incoming data
    if (!icon || !link || !name) {
      return res
        .status(400)
        .json({ error: "icon and link are required fields." });
    }

    // Create a new project blog detail document
    const projectBlogDetail = new PROJECTBLOGFOOTER({
      icon,
      link,
      name,
    });

    // Save the project blog detail to the database
    await projectBlogDetail.save();

    res.json({
      message: "Project blog detail added successfully.",
      data: projectBlogDetail,
    });
  } catch (error) {
    console.error("Error adding project blog detail:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});
// Route to get all description items
router.get("/api/get/footer", async (req, res) => {
  try {
    // Retrieve all description items from the database
    const descriptionItems = await PROJECTBLOGFOOTER.find();

    res.status(200).json(descriptionItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Route to delete a description item by ID
router.delete("/api/delete/footer/:id", requireLoginAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    // Find and delete the description item by ID
    await PROJECTBLOGFOOTER.findByIdAndRemove(id);
    res.status(200).json({ message: "Description item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
