const CoinTransaction = require('../models/Coin');
const User = require('../models/User');

exports.getCoinBalance = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ coins: user.coins });
};

exports.getCoinHistory = async (req, res) => {
  const transactions = await CoinTransaction.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(transactions);
};

exports.addCoins = async (req, res) => {
  const { amount, type, description } = req.body;

  if (amount <= 0) return res.status(400).json({ message: 'Amount must be positive' });

  const user = await User.findById(req.user.id);
  user.coins += amount;
  await user.save();

  await CoinTransaction.create({
    userId: user._id,
    amount,
    type,
    description
  });

  res.json({ message: 'Coins added', newBalance: user.coins });
};

exports.spendCoins = async (req, res) => {
  const { amount, type, description } = req.body;

  if (amount <= 0) return res.status(400).json({ message: 'Amount must be positive' });

  const user = await User.findById(req.user.id);
  if (user.coins < amount) return res.status(403).json({ message: 'Not enough coins' });

  user.coins -= amount;
  await user.save();

  await CoinTransaction.create({
    userId: user._id,
    amount: -amount,
    type,
    description
  });

  res.json({ message: 'Coins spent', newBalance: user.coins });
};
