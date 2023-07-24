const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userProfileSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profession: {
      type: String,
    },
    location: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
  });


mongoose.model("PROJECTBLOGHEAD", userProfileSchema);