const User = require("../models/userModel")
const bcrypt= require('bcrypt'); 

const userRegister = async (req, res) => {



try {

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