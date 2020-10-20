const router = require('express').Router();
const auth = require('../middleware/auth')
const adminRewardService = require('../service/Rewards/admin_rewards_service')

router.post('/admin_rewards',async(req,res)=>{
     await  adminRewardService.addAllRewards(req,res)
});

router.get('/admin_rewards',auth,async(req,res)=>{
    await  adminRewardService.getAllRewards(req,res)
});

router.patch('/admin_rewards/:id',auth,async(req,res)=>{
    await  adminRewardService.updateRewards(req,res)
});

router.delete('/admin_rewards/:id',auth, async(req,res)=>{
    await  adminRewardService.deleteReward(req,res)
});

module.exports= router