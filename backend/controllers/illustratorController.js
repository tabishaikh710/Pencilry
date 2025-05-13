const Illustrator = require("../models/illustrator");
const mailer = require('../helpers/mailer');
const {deleteFile} = require('../helpers/deleteFile');
const { validationResult } = require('express-validator');
const fs = require("fs").promises;
const path = require("path");

exports.createIllustrator = async (req, res) => {
  try {
    const {
      bio,
      skills,
      socialLinks,
     
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
   
      socialLinks: parsedSocialLinks,
      
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



exports.updateIllustrator = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Validation error",
        errors: errors.array(),
      });
    }

    const illustrator = await Illustrator.findOne({ user: req.user._id });
    if (!illustrator) {
      return res.status(404).json({
        success: false,
        msg: "Illustrator profile not found",
      });
    }

    // Extract and parse fields from req.body
    const {
      bio,
      skills,
      socialLinks,
  
      hourlyRate,
      availability,
      specialization,
      category,
    } = req.body;

    const data = {};

    if (bio !== undefined) data.bio = bio;

    if (skills !== undefined) {
      data.skills = Array.isArray(skills) ? skills : JSON.parse(skills);
    }

   
    if (socialLinks !== undefined) {
      data.socialLinks = typeof socialLinks === 'object' ? socialLinks : JSON.parse(socialLinks);
    }

    if (hourlyRate !== undefined) data.hourlyRate = hourlyRate;
    if (availability !== undefined) data.availability = availability;
    if (specialization !== undefined) data.specialization = specialization;
    if (category !== undefined) data.category = category;

  
   
    const updatedIllustrator = await Illustrator.findByIdAndUpdate(
      illustrator._id,
      { $set: data },
      { new: true, runValidators: true }
    ).populate("user category specialization");

    return res.status(200).json({
      success: true,
      msg: "Illustrator profile updated successfully",
      illustrator: updatedIllustrator,
    });

  } catch (error) {
    console.error("Update Illustrator Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
};



exports.getIllustrator = async (req, res) => {

  try {

    
    
  } catch (error) {
     return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
}