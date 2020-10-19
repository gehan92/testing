const Reward = require('../../models/Reward');


const   addAllRewards =async(req,res)=>{
       const userRewards = new Reward(req.body)
    try{
        await userRewards.save()
        const token =await userRewards.generateAuthToken()
        res.status(201).send({userRewards,token})
        }
    catch(e){
        res.status(400).send(e);
    }
};

const getAllRewards = async(req,res)=>{
    try{
        const reward  =  await Reward.find()
        console.log(reward)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const getAllRewardsDesc = async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({points: -1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}
const getAllRewardsAsc = async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({points: 1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const getAllRewardsLeastRecentFirst = async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({date: 1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const getAllRewardsMostRecentFirst = async(req,res)=>{
    try{
        const reward  =  await Reward.find().sort({date: -1})
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const getReward = async(req,res)=>{
    try{
        const _id = req.params.id
        const reward  =  await Reward.findById(_id)
        const result = {
            title_1: reward.title_1,
            title_2: reward.title_2,
            validity:reward.validity,
            rank: reward.rank,
            points: reward.points,
            date: reward.date
        }
        if(reward.length == 0 )
        throw new Error ('no rewards found')
        else
        res.status(200).json({status:true, reward:result})
        }catch(e){
                res.status(203).json({status:false, message:e.message})
        }
}

module.exports = {
                addAllRewards,
                getAllRewards,
                getAllRewardsDesc,
                getAllRewardsAsc,
                getAllRewardsLeastRecentFirst,
                getAllRewardsMostRecentFirst,
                getReward
                };