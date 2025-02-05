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

const msg=`<p>hii ${name}, please <a href="http://localhost:4000/mail-verification?id=${userData._id}">click here to varify</a> your email</p>`;

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

const mailVerification=async(req,res)=>{

    try {
const userID=req.query.id;

if (userID == undefined) {
    return res.render('404');
    
}

const userdata= await User.findOne({_id:userID});


if(userdata.is_verified==1){
    return res.render('mail-verification', {message:'your mail already   verified ! '});

}


if (userdata) {

    await User.findByIdAndUpdate({_id:userID},{
        $set:{
            is_verified:1
        }
    } 
    );

   
    return res.render('mail-verification', {message:'mail has been verified successfully! '});
} else {

    return res.render('mail-verification', {message:'User not Found! '});
    
}
    


        
    } catch (error) {
       
        console.log(error.message);
        return  res.render('404');
    }
    

}









module.exports= {
    userRegister,
    mailVerification
    
}