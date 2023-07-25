const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Jwt_secret = process.env.JWT_SECRET;
const PROJECTBLOGUSER = mongoose.model("PROJECTBLOGUSER");
const requireLoginAdmin = require("../middleware/requireLogin");
const nodemailer = require("nodemailer");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

router.post("/api/admin/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  if (!emailRegex.test(email)) {
    return res.status(422).json({ error: "Invalid email" });
  }

  try {
    const existingUser = await PROJECTBLOGUSER.findOne({ email });

    if (existingUser) {
      return res
        .status(422)
        .json({ error: "User already exists with that email" });
    }

    // Save user to the database
    const hashedPassword = await bcrypt.hash(password, 12);

    const userRec = new PROJECTBLOGUSER({
      email,
      password: hashedPassword,
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
          const { _id, email } = savedUser;
          res.json({ token, user: { _id, email } });
        } else {
          return res.status(422).json({ error: "Invalid password" });
        }
      })
      .catch((err) => console.log(err));
  });
});
// PUT request to change user's password
router.put("/api/admin/password", requireLoginAdmin, async (req, res) => {
  try {
    // Get the current user's ID from the authMiddleware
    const userId = req.user._id;

    // Find the user by their ID
    const user = await PROJECTBLOGUSER.findById(userId);

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the current password provided in the request body matches the user's current password
    const isMatch = await bcrypt.compare(
      req.body.currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid current password" });
    }
    if (req.body.currentPassword === req.body.newPassword) {
      return res
        .status(400)
        .json({ error: "New Password Can't Be Old Password" });
    }

    // Hash the new password provided in the request body
    const hashedPassword = await bcrypt.hash(req.body.newPassword, 12);

    // Update the user's password with the new hashed password
    user.password = hashedPassword;

    // Save the updated user to the database
    await user.save();

    // Return a success message with the updated user object
    res.json({ message: "User password updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
// Endpoint to check email
router.post("/api/check/email", (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

  // Create a transporter for sending emails
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL, // Replace with your own email address
      pass: process.env.EMAIL_PASSWORD, // Replace with your own email password
    },
  });

  PROJECTBLOGUSER.findOne({ email: email })
    .then((user) => {
      if (user) {
        // User found, send the OTP via email
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Password Reset OTP",
          text: `Dear user,\n\nYou have requested to reset your password for the site .\n\nPlease use the following OTP to proceed with the password reset:\n\nOTP: ${otp}\n\nIf you did not initiate this request, please ignore this email.\n\nBest regards,\nThe resume`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ error: "Failed to send OTP" });
          } else {
            return res.json({ message: "Otp send to your email.", otp: otp });
          }
        });
      } else {
        // User not found
        return res.json({ error: "User not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    });
});
// Reset password route
router.put("/api/admin/backend/reset-password", (req, res) => {
  const { email, newPassword } = req.body;

  // Hash the new password
  bcrypt.hash(newPassword, 12, (error, hashedPassword) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Server Error" });
    }

    // Update the user's password
    PROJECTBLOGUSER.findOneAndUpdate({ email }, { password: hashedPassword })
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(400).json({ error: "User not found" });
        }
        res.json({ message: "Password reset successful" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      });
  });
});
module.exports = router;
