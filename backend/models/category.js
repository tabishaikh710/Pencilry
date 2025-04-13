const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  categoryen: {
    type: String,
    required: true,
  },
},

);

module.exports = mongoose.model("Category", categorySchema);
