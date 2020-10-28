const User = require('../../models/AppUser');
const jwt = require('jsonwebtoken');

const getUserDetails= async(req,res)=>{
    const _id = req.params.id
    try{
    const userSettings  =  await User.findById(_id).select('name').select('email').select('profilePicture')
    res.send(userSettings)
    }catch(e){
     res.status(500).send()
    }
}
module.exports={
                getUserDetails
    };