const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Jwt_secret = process.env.JWT_SECRET;
const PROJECTBLOGDETAILS = mongoose.model("PROJECTBLOGDETAILS");
const requireLoginAdmin = require("../middleware/requireLogin");

// Route to add project blog details
router.post("/api/admin/add/details", requireLoginAdmin, async (req, res) => {
  try {
    const { label, value } = req.body;

    // Validate the incoming data
    if (!label || !value) {
      return res
        .status(400)
        .json({ error: "Label and value are required fields." });
    }

    // Create a new project blog detail document
    const projectBlogDetail = new PROJECTBLOGDETAILS({
      label,
      value,
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
router.get("/api/get/details", async (req, res) => {
  try {
    // Retrieve all description items from the database
    const descriptionItems = await PROJECTBLOGDETAILS.find();

    res.status(200).json(descriptionItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Route to delete a description item by ID
router.delete(
  "/api/delete/details/:id",
  requireLoginAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      // Find and delete the description item by ID
      await PROJECTBLOGDETAILS.findByIdAndRemove(id);
      res
        .status(200)
        .json({ message: "Description item deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
module.exports = router;
