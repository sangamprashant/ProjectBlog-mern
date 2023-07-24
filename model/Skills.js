const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userProfileSchema = new mongoose.Schema({
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  });


mongoose.model("PROJECTBLOGSKILLS", userProfileSchema);