const mongoose = require('mongoose');

 
const userSchema=new mongoose.Schema({
  
name:{
    type :String,
    required:true
},
email:{
    type :String,
    required:true
},
mobile:{
    type :String,
    required:true
},
password:{
    type :String,
    required:true
},
is_verified: {
    type: Number,
    default: 0, // Default is not verified
},
role: {
    type: String,
    enum: ['client', 'illustrator', 'admin', 'subadmin'],
    default: 'client'
  },

image:{
    type :String,
    required:true
}

}
);

userSchema.virtual('clientProfile', {
    ref: 'Client',
    localField: '_id',
    foreignField: 'user',
    justOne: true
  });

  userSchema.virtual('illustratorProfile', {
    ref: 'Illustrator',
    localField: '_id',
    foreignField: 'user',
    justOne: true
  });

module.exports= mongoose.model("User" , userSchema);
