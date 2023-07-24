const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userProfileSchema = new mongoose.Schema({
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true,
      },
  });


mongoose.model("PROJECTBLOGFOOTER", userProfileSchema);