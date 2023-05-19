const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Jwt_secret  = process.env.JWT_SECRET
const PROJECTBLOGUSER = mongoose.model("PROJECTBLOGUSER");
const requireLoginAdmin = require("../middleware/requireLogin")

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

router.post("/api/admin/signup", async (req, res) => {
  const { name, email, password, userName } = req.body;

  if (!name || !email || !password || !userName) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  if (!emailRegex.test(email)) {
    return res.status(422).json({ error: "Invalid email" });
  }

  try {
    const existingUser = await PROJECTBLOGUSER.findOne({
      $or: [{ email: email }, { userName: userName }],
    });
    if (existingUser) {
      return res.status(422).json({
        error: "User already exists with that email or username",
      });
    }

    // Save user to database
    const hashedPassword = await bcrypt.hash(password, 12);

    const userRec = new PROJECTBLOGUSER({
      name,
      email,
      password: hashedPassword,
      userName,
    });

    const savedUser = await userRec.save();
    if (savedUser) {
      return res.json({ message: "Registered successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// Route for checking username availability
router.post("/api/admin/check-username", async (req, res) => {
  const { userName } = req.body;

  try {
    // Check if the username exists in the database
    const existingUser = await PROJECTBLOGUSER.findOne({ userName });

    if (existingUser) {
      return res.json({ error: "Username already taken" });
    }

    // Username is available
    res.json({ message: "Username available" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
//signin
router.post("/api/admin/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please add email and password" });
  } else if (!emailRegex.test(email)) {
    return res.status(422).json({ error: "Invalid email" });
  } 

  PROJECTBLOGUSER.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "no user with this email" });
    }

    bcrypt
      .compare(password, savedUser.password)
      .then((match) => {
        if (match) {
          const token = jwt.sign({ _id: savedUser.id }, Jwt_secret);
          const { _id, name, email,userName } = savedUser;
          res.json({ token, user: { _id, name, email,userName} });
        } else {
          return res.status(422).json({ error: "Invalid password" });
        }
      })
      .catch((err) => console.log(err));
  });
});
// PUT request to change user's password
router.put('/api/admin/password', requireLoginAdmin, async (req, res) => {
  try {
    // Get the current user's ID from the authMiddleware
    const userId = req.user._id;

    // Find the user by their ID
    const user = await PROJECTBLOGUSER.findById(userId);

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Check if the current password provided in the request body matches the user's current password
    const isMatch = await bcrypt.compare(req.body.currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid current password' });
    }
    if (req.body.currentPassword===req.body.newPassword) {
      return res.status(400).json({ error: "New Password Can't Be Old Password" });
    }

    // Hash the new password provided in the request body
    const hashedPassword = await bcrypt.hash(req.body.newPassword, 12);

    // Update the user's password with the new hashed password
    user.password = hashedPassword;

    // Save the updated user to the database
    await user.save();

    // Return a success message with the updated user object
    res.json({ message: 'User password updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
