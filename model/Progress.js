const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userProfileSchema = new mongoose.Schema({
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  });


mongoose.model("PROJECTBLOGPROGRESS", userProfileSchema);