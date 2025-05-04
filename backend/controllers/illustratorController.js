const Illustrator = require("../models/illustrator");

exports.createIllustrator = async (req, res) => {
  try {
    const {
      bio,
      skills,
      socialLinks,
      experience,
      hourlyRate,
      availability,
      specialization,
      category
    } = req.body;

    if (!req.user || !req.user._id) {
      return res.status(401).json({ success: false, message: 'Unauthorized. User not found.' });
    }

    if (!skills || !category || !specialization) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const skillArray = Array.isArray(skills)
      ? skills
      : skills.split(',').map(skill => skill.trim()).filter(Boolean);

    const portfolioPaths = req.file ? [`/portfolio/${req.file.filename}`] : [];

    let parsedSocialLinks = {};
    try {
      parsedSocialLinks = typeof socialLinks === 'string' ? JSON.parse(socialLinks) : socialLinks || {};
    } catch (e) {
      return res.status(400).json({ success: false, message: 'Invalid format for socialLinks.' });
    }

    const newIllustrator = new Illustrator({
      user: req.user._id,
      bio: bio?.trim() || '',
      skills: skillArray,
      portfolio: portfolioPaths,
      socialLinks: parsedSocialLinks,
      experience: experience || '',
      hourlyRate,
      availability,
      specialization,
      category
    });

    await newIllustrator.save();

    res.status(201).json({ success: true, data: newIllustrator });

  } catch (error) {
    console.error('Create Illustrator Error:', error);
    res.status(400).json({ success: false, error: error.message });
  }
};
