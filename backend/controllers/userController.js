const User = require("../models/userModel");
const bcrypt = require('bcrypt'); 
const mailer = require('../helpers/mailer');
const { validationResult } = require('express-validator');
const randomString = require('randomstring');
const passwordReset = require("../models/passwordReset");
const jwt = require('jsonwebtoken');
const userRegister = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation error',
                errors: errors.array(),
            });
        }

        const { name, email, mobile, password } = req.body;
        const isExists = await User.findOne({ email });

        if (isExists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            mobile,
            password: hashPassword,
            image: 'image/' + req.file.filename
        });

        const userData = await user.save();

        const msg = `<p>Hi ${name}, please <a href="http://localhost:4000/mail-verification?id=${userData._id}">click here to verify</a> your email</p>`;
        mailer.sendMail(email, 'mail-verification', msg);

        return res.status(200).json({
            success: true,
            msg: "Registered successfully",
            user: userData
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};

const mailVerification = async (req, res) => {
    try {
        const userID = req.query.id;
        if (!userID) {
            return res.render('404');
        }

        const userdata = await User.findOne({ _id: userID });

        if (!userdata) {
            return res.render('mail-verification', { message: 'User not found!' });
        }

        if (userdata.is_verified === 1) {
            return res.render('mail-verification', { message: 'Your mail is already verified!' });
        }

        await User.findByIdAndUpdate(userID, { $set: { is_verified: 1 } });

        return res.render('mail-verification', { message: 'Mail has been verified successfully!' });

    } catch (error) {
        console.log(error.message);
        return res.render('404');
    }
};

const sendmailVerification = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation error',
                errors: errors.array()
            });
        }

        const { email } = req.body;
        const userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({
                success: false,
                msg: "Email doesn't exist!",
            });
        }

        if (userData.is_verified === 1) {
            return res.status(400).json({
                success: false,
                msg: `${userData.email} is already verified!`,
            });
        }

        const msg = `<p>Hi ${userData.name}, please <a href="http://localhost:4000/mail-verification?id=${userData._id}">click here to verify</a> your email</p>`;
        mailer.sendMail(userData.email, 'mail-verification', msg);

        return res.status(200).json({
            success: true,
            msg: "Verification link sent to your mail, please check!",
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation error',
                errors: errors.array(),
            });
        }

        const { email } = req.body;
        const userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({
                success: false,
                msg: "Email doesn't exist!"
            });
        }

        const resetToken = randomString.generate();
        const msg = `<p>Hi ${userData.name}, please <a href="http://localhost:4000/reset-password?token=${resetToken}">click here</a> to reset your password</p>`;
        await passwordReset.deleteMany({user_id:userData._id});
        const passwordResetEntry = new passwordReset({
            user_id: userData._id,
            token: resetToken
        });

        await passwordResetEntry.save();
        mailer.sendMail(userData.email, 'password-reset', msg);

        return res.status(201).json({
            success: true,
            msg: "Password reset link sent to your email"
        });





    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
};


const resetPassword= async(req,res)=>{
    try {
    if (req.query.token == undefined){
       
        return res.render('404');
    }
    
    
   const resetData=await passwordReset.findOne({token:req.query.token});


   if(!resetData){
    return res.render('404');
    
   }

  return res.render('reset-password',{resetData});
        
    } catch (error) {
        return res.render('404');
    }
} 

const updatePassword = async(req,res)=>{

try {
   
    
    const {user_id, password ,confirm_password} = req.body;
    const resetData = await passwordReset.findOne({user_id});

    if(password != confirm_password){
        return res.render('reset-password',{resetData, error:'Confirm Password not matching! '});
    }
  
   const  hashedPassword =  await bcrypt.hash(confirm_password, 10)

  await User.findByIdAndUpdate({_id:user_id},{
$set:{
    password:hashedPassword
}
   });
   await passwordReset.deleteMany({user_id});

   return res.render('reset-success');

} catch (error) { 
    return res.render('404');
}


}

const resetSuccess =async (req,res)=>{
  try {
    return res.render('reset-success');
  } catch (error) {
    return res.render('404');
  }
}
const generateAccessToken = async (user) => {
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "24h" });
    return token;
  };
  
  const loginUser = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          msg: "Validation errors",
          errors: errors.array(),
        });
      }
  
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          msg: "Email and password are required!",
        });
      }
  
      const userData = await User.findOne({ email });
  
      if (!userData) {
        return res.status(401).json({
          success: false,
          msg: "Incorrect email or password",
        });
      }
  
      const passwordMatch = await bcrypt.compare(password, userData.password);
  
      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          msg: "Incorrect email or password",
        });
      }
  
      if (userData.is_verified === 0) {
        return res.status(401).json({
          success: false,
          msg: "Please verify your account",
        });
      }
  
      const accessToken = await generateAccessToken({ user: userData });
  
      return res.status(200).json({
        success: true,
        msg: "Login successful!",
        user: userData,
        accessToken: accessToken,
        tokenType: "Bearer",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        msg: error.message,
      });
    }
  };
  


  const usreProfile= async(req,res)=>{
    try {

        
        
        return res.status(200).json({
                   
            data: req.user
        })   

    } catch (error) {
        
        return res.status(400).json({
            success: false,
            msg: error.message,
          });


    }
  }

module.exports = {
    userRegister,
    mailVerification,
    sendmailVerification,
    forgotPassword,
    resetPassword,
    updatePassword,
    resetSuccess,
    loginUser,
    usreProfile
};
