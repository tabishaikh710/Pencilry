const Category = require('../models/category');

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? `/catImages/${req.file.filename}` : '';

    const category = new Category({
      name,
      image,
      description
    });

    const saved = await category.save();

    res.status(200).json({
      success: true,
      message: 'Category added successfully',
      data: saved
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = {
  createCategory
};
