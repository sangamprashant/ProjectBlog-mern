const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["web", "application"],
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "PROJECTBLOGUSER",
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("PROJECTBLOGPROJECT", projectSchema);

module.exports = Project;
