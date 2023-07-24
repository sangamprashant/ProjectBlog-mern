const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
  Types: { ObjectId },
} = require("mongoose");
const PROJECTBLOGUSER = mongoose.model("PROJECTBLOGUSER");
const requireLogin = require("../middleware/requireLogin");
const PROJECTBLOGPROJECT = mongoose.model("PROJECTBLOGPROJECT");

// Upload project
router.post("/api/admin/upload-project", requireLogin, (req, res) => {
  const { imageUrl, title, link, type, description } = req.body;

  if (!imageUrl || !title || !link || !type || !description) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  const project = new PROJECTBLOGPROJECT({
    imageUrl,
    title,
    link,
    type,
    description,
  });

  project
    .save()
    .then((result) => {
      res.json({ project: result, message: "Project uploaded successfully" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    });
});
// Get web projects for a particular user
router.get("/api/get/projects/:type", (req, res) => {
  const { type } = req.params;

  PROJECTBLOGPROJECT.find({ type })
    .sort({ createdAt: -1 }) // Sort projects by creation date in descending order
    .then((projects) => {
      res.json({ projects });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    });
});
// Route to delete a description item by ID
router.delete("/api/delete/projects/:id", requireLogin, async (req, res) => {
  try {
    const { id } = req.params;
    // Find and delete the description item by ID
    await PROJECTBLOGPROJECT.findByIdAndRemove(id);
    res.status(200).json({ message: "Description item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
