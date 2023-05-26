const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Types: { ObjectId } } = require('mongoose');
const PROJECTBLOGUSER = mongoose.model("PROJECTBLOGUSER");
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

  
  router.get("/api/user/searched/:userName", (req, res) => {
    const { userName } = req.params;
  
    PROJECTBLOGUSER.findOne({ userName })
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: "User not found" });
          return;
        }
  
        PROJECTBLOGPROJECT.find({ user: user._id })
          .then((projects) => {
            res.json({ user, projects });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "Something went wrong" });
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
      });
  });
module.exports = router;
