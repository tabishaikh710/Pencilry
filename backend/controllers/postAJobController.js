const post= require('../models/jobpost');
const { validationResult, body } = require('express-validator');

const postJobController= async (req,res )=>{


    try {

   
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                
             errors: errors.array() 
            });
        }

        const { title, description, location, company, category, skills, experience, jobType } = req.body;

        // Ensure you're using the correct model name and casing
        const newJob = new PostJob({
          title,
          description,
          location,
          company,
          category,
          skills,
          experience,
          jobType,
        });


        const savedJob = await newJob.save();

        return res.status(201).json({
            success:true,
            message: 'Job posted successfully',
            data:savedJob
        });
        
    } catch (error) {


        return res.status(500).json({ 
            success: false,
            msg: 'Internal server error',
            error: error.message,
        
        
        });
          

    
        
    }


}

module.exports= {postJobController}