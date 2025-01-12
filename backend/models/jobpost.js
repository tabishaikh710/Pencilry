const mongoose = require('mongoose');

const postJobSchema = new mongoose.Schema({
//   user_id:{
//     type:mongoose.Schema.Types.ObjectId,
//     require:ture,
//     ref:'User'
// },
  title: {
    type: String,
    required: [true, 'Title is required'], // Custom error message
    trim: true, // Removes unnecessary spaces
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  skills: {
    type: [String], // Array of strings for multiple skills
    required: [true, 'At least one skill is required'],
  },
  projectSize: {
    type: String,
    enum: ['Small', 'Medium', 'Large'], // Valid values for project size
    required: [true, 'Project size is required'],
  },
  projectDuration: {
    type: String,
    required: [true, 'Project duration is required'],
  },
  experienceLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Expert'], // Experience levels
    required: [true, 'Experience level is required'],
  },
  contractToHire: {
    type: Boolean,
    default: false, // Default is false
  },
  budget: {
    type: Number,
    required: [true, 'Budget is required'],
    min: [0, 'Budget must be a positive number'], // Budget cannot be negative
  },
  document: {
    type: String, // Path to the uploaded document
    required: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const PostJob = mongoose.model('PostJob', postJobSchema);

module.exports = PostJob;
