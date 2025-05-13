const mongoose = require("mongoose");

// models/Experience.js
const experienceSchema = new mongoose.Schema({
  illustrator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Illustrator",
    required: true
  },
  title: {
    type: String,
    required: [true, "Job title is required"]
  },
  company: {
    type: String,
    required: [true, "Company name is required"]
  },
  duration: {
    type: String,
    required: [true, "Duration is required"]
  },
  description: {
    type: String,
    maxlength: [1000, "Description can be max 1000 characters"]
  },
  startDate: Date,
  endDate: Date,
  currentlyWorking: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Experience", experienceSchema);
