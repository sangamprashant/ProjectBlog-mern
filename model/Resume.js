const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const resumeSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "PROJECTBLOGUSER",
      required: true,
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model("PROJECTBLOGRESUME", resumeSchema);

module.exports = Resume;
