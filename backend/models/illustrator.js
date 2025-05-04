const mongoose = require("mongoose");

const illustratorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  bio: {
    type: String,
    default: '',
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  skills: {
    type: [String],
    required: [true, 'At least one skill is required'],
    validate: {
      validator: v => v.length > 0,
      message: 'At least one skill is required'
    }
  },
  portfolio: {
    type: [String],
    default: []
  },
  socialLinks: {
    website: String,
    behance: String,
    dribbble: String,
    instagram: String
  },
  experience: [
    {
      title: {
        type: String,
        required: [true, 'Job title is required']
      },
      company: {
        type: String,
        required: [true, 'Company name is required']
      },
      duration: {
        type: String,
        required: [true, 'Duration is required']
      },
      description: {
        type: String,
        maxlength: [1000, 'Description can be max 1000 characters']
      },
      startDate: {
        type: Date
      },
      endDate: {
        type: Date
      },
      currentlyWorking: {
        type: Boolean,
        default: false
      }
    }
  ],
  hourlyRate: {
    type: Number,
    min: [0, 'Hourly rate cannot be negative']
  },
  availability: {
    type: String,
    enum: ['available', 'busy', 'unavailable'],
    default: 'available'
  },
  specialization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
},
{
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Illustrator', illustratorSchema);
  