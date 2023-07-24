const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userProfileSchema = new mongoose.Schema({
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  });


mongoose.model("PROJECTBLOGINTEREST", userProfileSchema);