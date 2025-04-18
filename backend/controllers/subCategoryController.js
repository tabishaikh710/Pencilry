const SubCategory = require('../models/subCategory');

const addSubCategory = async (req, res) => {
  try {
    const { name, category, description } = req.body;
    const image = req.file ? `/subImages/${req.file.filename}` : '';

    if (!name || !category) {
      return res.status(400).json({ success: false, message: 'Name and Category are required' });
    }

    const newSubCategory = new SubCategory({
      name,
      category,
      image,
      description
    });

    const savedSubCategory = await newSubCategory.save();

    res.status(201).json({
      success: true,
      message: 'Subcategory added successfully',
      data: savedSubCategory
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addSubCategory
};
