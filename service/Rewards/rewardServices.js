const Reward = require('../../models/Reward');



const   addAllRewards =async(req,res)=>{
       const userRewards = new Reward(req.body)
    try{
        if(req.file){
            Reward.avatar  = req.file.path
        }
        
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
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 15;
        console.log(pagination)
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const reward  =  await Reward.find()
        .select('title_1')
        .select('title_2')
        .select('validity')
        .select('rank')
        .select('points')
        .select('createdAt')
        .skip((page - 1)* pagination)
        .limit(pagination)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const getAllRewardsDesc = async(req,res)=>{
    try{
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 15;
        console.log(pagination)
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const reward  =  await Reward.find()
        .select('title_1')
        .select('title_2')
        .select('validity')
        .select('rank')
        .select('points')
        .select('createdAt')
        .sort({points: -1})
        .skip((page - 1)* pagination)
        .limit(pagination)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}
const getAllRewardsAsc = async(req,res)=>{
    try{
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 15;
        console.log(pagination)
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const reward  =  await Reward.find()
        .select('title_1')
        .select('title_2')
        .select('validity')
        .select('rank')
        .select('points')
        .select('createdAt')
        .sort({points: 1})
        .skip((page - 1)* pagination)
        .limit(pagination)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const getAllRewardsLeastRecentFirst = async(req,res)=>{
    try{
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 15;
        console.log(pagination)

        const page = req.query.page ? parseInt(req.query.page) : 1;
        const reward  =  await Reward.find().select('title_1')
        .select('title_2')
        .select('validity')
        .select('rank')
        .select('points')
        .select('createdAt')
        .sort({createdAt: -1})
        .skip((page - 1)* pagination)
        .limit(pagination)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const getAllRewardsMostRecentFirst = async(req,res)=>{
    try{
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 15;
        console.log(pagination)

        const page = req.query.page ? parseInt(req.query.page) : 1;
        const reward  =  await Reward.find()
        .select('title_1')
        .select('title_2')
        .select('validity')
        .select('rank')
        .select('points')
        .sort({createdAt: 1})
        .skip((page - 1)* pagination)
        .limit(pagination)
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
            description:reward.description,
            rank: reward.rank,
            points: reward.points,
            locations: rewards.locations,
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