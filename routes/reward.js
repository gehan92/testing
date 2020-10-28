const router = require('express').Router();
const auth = require('../middleware/auth');
const multer = require('multer')
const RewardService = require('../service/Rewards/rewardServices')
// const RewardService1 = require('../service/Rewards/rewardServices1')
// const upload1 =require('../middleware/upload')



router.post('/rewards',async(req,res)=>{
    await  RewardService.addAllRewards(req,res)
});

// const upload = multer({

//     dest:'avatars'
// })

// router.post('/rewardsImage',upload.array('avatar',5),(req,res)=>{
//     // await  RewardService.addAllRewards(req,res)
//     res.send()

// });



// router.post('/store',upload1.single('avatar'),RewardService1.store)
//     //    RewardService1.store(req,res)
//     // const files = req.files
//     // res.send(files)


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