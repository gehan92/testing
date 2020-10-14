const mongoose = require('mongoose');
const appUserSchema  =new mongoose.Schema({

name:{
    type:String,
    max: 255, 
    min: 6
},
username:{
    type:String,
    max: 255, 
    min: 6
},
email:{
    type:String,
    max: 255, 
    min: 6
},
password:{
    type:String
},
tokens:[{ 
    token:{
        type:String
    }
}],
mobileNumber:{
    type:String
},
isMobileNumberConfirmed:{
    type:Boolean
},
profilePicture:{
    type:String
}
},{timestamps:true})


    appUserSchema.methods.generateAppUserAuthToken = async function (){
    const appUser = this
    const token = jwt.sign({_id:appUser._id.toString() },process.env.TOKEN_SECRET);
    appUser.tokens =  appUser.tokens.concat({token})
    await appUser.save()
    return token
    }


module.exports= mongoose.model('appUser',appUserSchema );