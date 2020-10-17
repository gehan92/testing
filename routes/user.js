const router = require('express').Router(); 
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')


router.post('/register',async (req,res)=>{

    const userRegister = new User(req.body)
    // console.log(userRegister)
       try{
        await userRegister.save()
        const token =await userRegister.generateAppUserAuthToken()
        res.status(201).send({userRegister,token})
        }
    catch(e){
        res.status(400).send(e);
    }
});

router.get('/settings/:id',auth,async(req,res)=>{
        const _id = req.params.id
        try{
        const userSettings  =  await User.find()
        const UserResult = {
            name: userSettings.name,
            email: userSettings.email,
            profilePicture:userSettings.profilePicture,
            languages: userSettings.languages
        }
        if(userResults.length == 0 )
        throw new Error ('no rewards found')
        else
        res.status(200).json({status:true, reward:UserResult})
        }catch(e){
         res.status(500).send()
        }
});
module.exports = router;
