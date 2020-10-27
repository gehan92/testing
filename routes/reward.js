const router = require('express').Router();
const auth = require('../middleware/auth');
const multer = require('multer')
const RewardService = require('../service/Rewards/rewardServices')

router.post('/rewards',async(req,res)=>{
    await  RewardService.addAllRewards(req,res)
});

const upload = multer({

    dest:'rewardImages'
})

router.post('/rewardImage',upload.array('rewardImage',5),(req,res,next)=>{
    // await  RewardService.addAllRewards(req,res)
    const files = req.files

    res.send(files)
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

router.get('/ClaimRewards/:id',auth,async(req,res)=>{
    await  RewardService.getReward(req,res)
});

module.exports = router;