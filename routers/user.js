const router = require('express').Router(); 
const User = require('../models/User');
const Validator = require('validator');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const {updateValidation} = require('../validation')
const auth = require('../middleware/auth')


router.post('/register',async (req,res)=>{

    const userRegister = new User(req.body)
    console.log(userRegister)
       try{
        await userRegister.save()
        const token =await userRegister.generateAppUserAuthToken()
        console.log(token)
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
        res.send(userSettings)
        }catch(e){
                res.status(500).send()
        }
});

//Update profile
router.patch('/settings/update/:id',async (req,res)=>{

    const updates = Object.keys(req.body);
    const allowedUpdate =['name','email','password']
    const isValidOperation= updates.every((update)=>allowedUpdate.includes(update));

    console.log(isValidOperation)
    if(!isValidOperation){

        return res.status(400).send({error:'invalid update'})

    }
    const validation = Joi.Validate(req)

      const {error} = updateValidation(req.body);
      if(error) return res.status(400).send(error.details[0].message)

    try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true,Validator:true});
    // console.log(user)
    console.log(user)
    if(!user){
       return res.status(404).send();
    }
    res.send(user)
  }catch(e){
    res.status(400).send(e);
}
})

//Delete profile 
router.delete('/settings/delete/:id', async(req,res)=>{
    try{
    const user =await User.findByIdAndDelete(req.params.id);
    if(!user){
        return res.statusMessage(404).send()
    }
    res.send(user);
    }catch (e){
        res.status(500).send();
    }
})
module.exports = router;
