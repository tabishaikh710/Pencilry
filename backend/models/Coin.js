const mongoose = require('mongoose');

const coinTransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number, // Positive = add, Negative = spend
    required: true
  },
  type: {
    type: String, // e.g., 'Purchase', 'Apply Job', 'Post Job'
    required: true
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CoinTransaction', coinTransactionSchema);
