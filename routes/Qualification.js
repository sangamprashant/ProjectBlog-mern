const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Jwt_secret = process.env.JWT_SECRET;
const PROJECTBLOGQUALIFICATION = mongoose.model("PROJECTBLOGQUALIFICATION");
const requireLoginAdmin = require("../middleware/requireLogin");

// Route to add project blog Qualifications
router.post("/api/admin/add/Qualifications", requireLoginAdmin, async (req, res) => {
  try {
    const { label, value, type } = req.body;

    // Validate the incoming data
    if (!label || !value ||!type) {
      return res
        .status(400)
        .json({ error: "Label and value are required fields." });
    }

    // Create a new project blog detail document
    const projectBlogDetail = new PROJECTBLOGQUALIFICATION({
      label,
      value,
      type
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
// Route to get all Qualifications items
router.get("/api/get/Qualifications/:type", async (req, res) => {
    const {type} =req.params
  try {
    // Retrieve all Qualifications items from the database
    const QualificationsItems = await PROJECTBLOGQUALIFICATION.find({type});

    res.status(200).json(QualificationsItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Route to delete a Qualifications item by ID
router.delete(
  "/api/delete/qualifications/:id",
  requireLoginAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      // Find and delete the Qualifications item by ID
      await PROJECTBLOGQUALIFICATION.findByIdAndRemove(id);
      res
        .status(200)
        .json({ message: "Qualifications item deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
module.exports = router;
