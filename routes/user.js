const router = require('express').Router(); 
const auth = require('../middleware/auth')
const RewardService = require('../service/Users/userServices')

router.post('/register',async (req,res)=>{
    await  RewardService.addAllUsers(req,res)
});

router.get('/settings/:id',async(req,res)=>{
    await  RewardService.getUserDetails(req,res) 
});
module.exports = router;
