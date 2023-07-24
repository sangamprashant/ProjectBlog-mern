const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const resumeSchema = new Schema(
  {
    content: {
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

const Resume = mongoose.model("PROJECTBLOGFOOTERCONTENT", resumeSchema);
module.exports = Resume;
