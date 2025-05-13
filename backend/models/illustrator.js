// models/Illustrator.js
const mongoose = require("mongoose");

const illustratorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  bio: {
    type: String,
    maxlength: [500, "Bio cannot exceed 500 characters"]
  },
  skills: {
    type: [String],
    required: [true, "At least one skill is required"]
  },
  socialLinks: {
    website: String,
    behance: String,
    dribbble: String,
    instagram: String
  },
  hourlyRate: {
    type: Number,
    min: [0, "Hourly rate cannot be negative"]
  },
  availability: {
    type: String,
    enum: ["available", "busy", "unavailable"],
    default: "available"
  },
  specialization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

illustratorSchema.virtual("portfolio", {
  ref: "Portfolio",
  localField: "_id",
  foreignField: "illustrator"
});

illustratorSchema.virtual("experiences", {
  ref: "Experience",
  localField: "_id",
  foreignField: "illustrator"
});

module.exports = mongoose.model("Illustrator", illustratorSchema);