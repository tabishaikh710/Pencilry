const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String, // Can be a URL or path to the category image
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
}, 
{ timestamps: true }
);




module.exports = mongoose.model("Category", categorySchema);
