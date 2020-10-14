const router = require('express').Router();
const Reward = require('../models/Reward');
const RewardHeader = require('../models/RewardHeader');
const auth = require('../middleware/auth');
const { populate } = require('../models/Reward');

router.post('/rewards',async(req,res)=>{
    const userRewards = new Reward(req.body)
       console.log(userRewards)
       try{
        await userRewards.save()
        const token =await userRewards.generateAuthToken()
        console.log(token)
            res.status(201).send({userRewards,token})
        }
    catch(e){
        res.status(400).send(e);
    }
});

router.get('/rewards',auth,async(req,res)=>{
    try{
        const reward  =  await Reward.find()
        // const token =await userRewards.generateAuthToken()
        console.log(reward)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
    });

router.get('/rewardsDesc',auth,async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({points: -1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
    });

router.get('/rewardsAsc',auth,async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({points: 1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
    });

router.get('/rewardsLeastRecentFirst',auth,async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({date: 1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
    });

router.get('/rewardsMostRecentFirst',async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({date: -1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
    });

router.get('/myRewards/:id',auth,async(req,res)=>{
        const _id = req.params.id
    try{
        const reward  =  await Reward.findById(_id)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
    });

module.exports = router;