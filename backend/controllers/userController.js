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

mailer.sendMail(email,'mail-verification', msg);



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

const mailVerification =async(req, res)=>{

try {

    if (req.query.id==undefined) {
        return res.ejs.render("404"); // 🔥 Add status(404)
        
    }

    const userData= await User.findOne({_id: req.query.id});


if (userData) {

    await User.findByIdAndUpdate({_id: req.query.id}),{$set:{
        is_verified:1
    }}
    
} else {
    return res.status(404).ejs.render("mail-verification", { message: "User not found!" });
    
}

    
} catch (error) {

console.log(error.message);
return res.ejs.render('404')

    
}


}










module.exports= {
    userRegister,
    mailVerification
}