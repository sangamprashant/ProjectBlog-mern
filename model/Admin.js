const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const adminSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


mongoose.model("PROJECTBLOGUSER", adminSchema);