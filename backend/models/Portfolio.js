const mongoose = require("mongoose");
// models/Portfolio.js
const portfolioSchema = new mongoose.Schema({
  illustrator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Illustrator",
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    enum: ["image", "video", "other"],
    required: true
  },
  title: String,
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model("Portfolio", portfolioSchema);