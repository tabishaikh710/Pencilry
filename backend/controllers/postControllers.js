const category = require("../models/category");
const Jobpost = require("../models/jobpost");

// Helper: Extract uploaded file paths
const extractFilePaths = (file) => {
  return file ? [`/jobdoc/${file.filename}`] : [];
};


category=async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}

postAjob = async (req, res) => {
  try {
    const {
      title,
      skills,
      project_size,
      project_time,
      experience_level,
      contract_hire,
      budget,
      deadline,
      description
    } = req.body;

    if (!req.user || !req.user._id) {
      return res.status(401).json({ success: false, message: 'Unauthorized. User not found.' });
    }

    // Validate required fields
    if (
      !title || !skills || !project_size || !project_time || !experience_level ||
      !contract_hire || !budget || !deadline || !description
    ) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Convert comma-separated string to array if needed
    const skillArray = Array.isArray(skills)
      ? skills
      : skills.split(',').map(skill => skill.trim()).filter(Boolean);

    // Extract attachments
    const attachments = extractFilePaths(req.file);

    const newJob = new Jobpost({
      user: req.user._id,
      title: title.trim(),
      skills: skillArray,
      project_size,
      project_time,
      experience_level,
      contract_hire,
      budget,
      deadline,
      description: description.trim(),
      attachments
    });

    await newJob.save();

    return res.status(201).json({
      success: true,
      message: 'Job posted successfully',
      job: newJob
    });

  } catch (error) {
    console.error('Error posting job:', error);
    return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};


module.exports={
  postAjob,
category
}