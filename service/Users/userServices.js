const User = require('../../models/User');
const jwt = require('jsonwebtoken');

const   addAllUsers =async(req,res)=>{
const userRegister = new User(req.body)
    try{
        await userRegister.save()
        const token =await userRegister.generateAppUserAuthToken()
        res.status(201).send({userRegister,token})
        }
    catch(e){
        res.status(400).send(e);
    }
};

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
                addAllUsers,
                getUserDetails
    };