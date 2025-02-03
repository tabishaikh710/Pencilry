const User = require("../models/userModel")
const bcrypt= require('bcrypt'); 
const mailer = require('../helpers/mailer');
const {validationResult}=require('express-validator')

const userRegister = async (req, res) => {



try {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({
            success:false,
            msg:'error',
            errors: errors.array()
            
            });

        
    }

const {name , email , mobile, password} = req.body;

const isExists= await User.findOne({email:email});

if (isExists) {
    return res.status(400).json({
        success:false,
        message: "Email already exists"});
}

const hashPassword= await bcrypt.hash(password, 10);
const user = new User({
    name , 
    email,
    mobile,
    password: hashPassword,
    image:'image/'+req.file.filename
});

const userData= await user.save();

const msg=`<p>hii ${name}, please <a href="http://localhost:4000/mail-varification?id=${userData._id}">click here to varify</a> your email</p>`;

mailer.sendMail(email,'mail varification', msg);



return res.status(200).json({
    success:true,
    msg:"rigestered successfully",
    user: userData
});

    
} catch (error) {

    return res.status(400).json({
        success:false,
        msg:error.message,
    });
    
}


}

module.exports= {
    userRegister,
}