const mongoose = require('mongoose');

const jobpostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    
  },
  title: { 
    type: String, 
    required: true, 
    trim: true, 
    minlength: [5, 'Title must be at least 5 characters long'] 
  },
  skills: {
    type: [String],
    required: true
  },
  project_size: {
    type: String,
    required: true,
    enum: {
      values: ['Small', 'Medium', 'Large'],
      message: '{VALUE} is not a valid project size'
    }
  },
  project_time: {
    type: String,
    required: true,
    enum: {
      values: ['3 to 6 months', '1 to 3 months', 'Less than 1 month'],
      message: '{VALUE} is not a valid project time'
    }
  },
  experience_level: {
    type: String,
    required: true,
    enum: {
      values: ['Beginner', 'Intermediate', 'Expert'],
      message: '{VALUE} is not a valid experience level'
    }
  },
  contract_hire: {
    type: String,
    required: true,
    enum: {
      values: ['Yes', 'No'],
      message: '{VALUE} is not a valid contract hire option'
    }
  },
  budget: { 
    type: Number, 
    required: true, 
    min: [1, 'Budget must be a positive number'] 
  },
  deadline: { 
    type: Date, 
    required: true, 
    validate: {
      validator: function(v) {
        return v > Date.now();
      },
      message: 'Deadline must be a future date'
    }
  },
  description: { 
    type: String, 
    required: true, 
    trim: true, 
    maxlength: [500, 'Description cannot exceed 500 characters'] 
  },
  attachments: {
    type: [String],
    default: [],
    
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Jobpost', jobpostSchema);
