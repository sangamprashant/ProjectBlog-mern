const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const adminSchema = new mongoose.Schema(
  {
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
