const router = require('express').Router();
const auth = require('../middleware/auth');
const RewardService = require('../service/Rewards/rewardServices')

router.post('/rewards',async(req,res)=>{
    await  RewardService.addAllRewards(req,res)
});

router.get('/rewards',auth,async(req,res)=>{
    await  RewardService.getAllRewards(req,res)
});

router.get('/rewardsDesc',auth,async(req,res)=>{
    await  RewardService.getAllRewardsDesc(req,res)
});

router.get('/rewardsAsc',auth,async(req,res)=>{
    await  RewardService.getAllRewardsAsc(req,res)
});

router.get('/rewardsLeastRecentFirst',auth,async(req,res)=>{
    await  RewardService.getAllRewardsLeastRecentFirst(req,res)
});

router.get('/rewardsMostRecentFirst',async(req,res)=>{
    await  RewardService.getAllRewardsMostRecentFirst(req,res)
});

router.get('/rewards/:id',auth,async(req,res)=>{
    await  RewardService.getReward(req,res)
});

module.exports = router;