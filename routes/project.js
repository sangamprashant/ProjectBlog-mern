const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Types: { ObjectId } } = require('mongoose');

const requireLogin = require("../middleware/requireLogin");
const PROJECTBLOGPROJECT = mongoose.model("PROJECTBLOGPROJECT");

// Upload project
router.post("/api/admin/upload-project", requireLogin, (req, res) => {
  const { imageUrl, title, link, type } = req.body;

  const userId = req.user._id;

  if (!imageUrl || !title || !link || !type) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  const project = new PROJECTBLOGPROJECT({
    imageUrl,
    title,
    link,
    type,
    user: userId,
  });

  project
    .save()
    .then((result) => {
      res.json({ project: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    });
});
// Get web projects for a particular user
router.get("/api/projects/:Project/:userId", (req, res) => {
    const userId = req.params.userId;
    const Project = req.params.Project;

    PROJECTBLOGPROJECT.find({ type: Project, user: userId })
      .sort({ createdAt: -1 }) // Sort projects by creation date in descending order
      .populate("user", "_id name") // Optional: Populate user details
      .then((projects) => {
        res.json({ projects });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
      });
  });

  
  // Get app projects for a particular user
  router.get("/api/user/items/:userName/:type", (req, res) => {
    const { userName, type } = req.params;
    let userId;
  
    try {
      userId = mongoose.Types.ObjectId(userName);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Invalid user ID" });
      return;
    }
  
    PROJECTBLOGPROJECT.find({ type, user: userId })
      .sort({ createdAt: -1 })
      .populate("user", "_id name") // Optional: Populate user details
      .then((items) => {
        res.json({ items });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
      });
  });
module.exports = router;
