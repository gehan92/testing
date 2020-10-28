const Reward = require('../../models/Reward');
const User = require('../../models/User')


const   store =(req,res,next)=>{

    let reward1 = new Reward({
        title_1:req.body.title_1,
        title_2:req.body.title_2,
        avatar:req.avatar

    })
// console.log(reward1)
    if(req.file){
        reward1.avatar = req.file.path
    }
    console.log(reward1)
    reward1.save()
    .then(response =>{
        res.json({
            message:'Employee added successfully!'
        })
    })
    .catch(error =>{

        res.json({
            message:'An error!'
        })
    })

    //    const userRewards = new Reward(req.body)
    // try{
    //     if(req.file){
    //         Reward.avatar  = req.file.path
    //     }
        
    //     await userRewards.save()
    //     const token =await userRewards.generateAuthToken()
    //     res.status(201).send({userRewards,token})
    //     }
    // catch(e){
    //     res.status(400).send(e);
    // }
};
//https://www.youtube.com/watch?v=62YETqynpcs&ab_channel=TechFounder
// const getAllRewards = async(req,res)=>{
//     try{
//         const pagination = req.query.pagination
//         ? parseInt(req.query.pagination)
//         : 15;
//         console.log(pagination)
//         const page = req.query.page ? parseInt(req.query.page) : 1;
//         const reward  =  await Reward.find()
//         .select('title_1')
//         .select('title_2')
//         .select('validity')
//         .select('rank')
//         .select('points')
//         .select('createdAt')
//         .skip((page - 1)* pagination)
//         .limit(pagination)
//         res.send(reward)
//         }catch(e){
//                 res.status(500).send()
//         }
// }

// const getAllRewardsDesc = async(req,res)=>{
//     try{
//         const pagination = req.query.pagination
//         ? parseInt(req.query.pagination)
//         : 15;
//         console.log(pagination)
//         const page = req.query.page ? parseInt(req.query.page) : 1;
//         const reward  =  await Reward.find()
//         .select('title_1')
//         .select('title_2')
//         .select('validity')
//         .select('rank')
//         .select('points')
//         .select('createdAt')
//         .sort({points: -1})
//         .skip((page - 1)* pagination)
//         .limit(pagination)
//         res.send(reward)
//         }catch(e){
//                 res.status(500).send()
//         }
// }
// const getAllRewardsAsc = async(req,res)=>{
//     try{
//         const pagination = req.query.pagination
//         ? parseInt(req.query.pagination)
//         : 15;
//         console.log(pagination)
//         const page = req.query.page ? parseInt(req.query.page) : 1;
//         const reward  =  await Reward.find()
//         .select('title_1')
//         .select('title_2')
//         .select('validity')
//         .select('rank')
//         .select('points')
//         .select('createdAt')
//         .sort({points: 1})
//         .skip((page - 1)* pagination)
//         .limit(pagination)
//         res.send(reward)
//         }catch(e){
//                 res.status(500).send()
//         }
// }

// const getAllRewardsLeastRecentFirst = async(req,res)=>{
//     try{
//         const pagination = req.query.pagination
//         ? parseInt(req.query.pagination)
//         : 15;
//         console.log(pagination)

//         const page = req.query.page ? parseInt(req.query.page) : 1;
//         const reward  =  await Reward.find().select('title_1')
//         .select('title_2')
//         .select('validity')
//         .select('rank')
//         .select('points')
//         .select('createdAt')
//         .sort({createdAt: -1})
//         .skip((page - 1)* pagination)
//         .limit(pagination)
//         res.send(reward)
//         }catch(e){
//                 res.status(500).send()
//         }
// }

// const getAllRewardsMostRecentFirst = async(req,res)=>{
//     try{
//         const pagination = req.query.pagination
//         ? parseInt(req.query.pagination)
//         : 15;
//         console.log(pagination)

//         const page = req.query.page ? parseInt(req.query.page) : 1;
//         const reward  =  await Reward.find()
//         .select('title_1')
//         .select('title_2')
//         .select('validity')
//         .select('rank')
//         .select('points')
//         .sort({createdAt: 1})
//         .skip((page - 1)* pagination)
//         .limit(pagination)
//         res.send(reward)
//         }catch(e){
//                 res.status(500).send()
//         }
// }

// const getReward = async(req,res)=>{
//     try{
//         const _id = req.params.id
        
//         const reward  =  await Reward.findById(_id)
//         const result = {
//             title_1: reward.title_1,
//             title_2: reward.title_2,
//             validity:reward.validity,
//             description:reward.description,
//             rank: reward.rank,
//             points: reward.points,
//             locations: rewards.locations,
//             date: reward.date
//         }
//         if(reward.length == 0 )
//         throw new Error ('no rewards found')
//         else
//         res.status(200).json({status:true, reward:result})
//         }catch(e){
//                 res.status(203).json({status:false, message:e.message})
//         }
// }
module.exports = {
    store,
                // getAllRewards,
                // getAllRewardsDesc,
                // getAllRewardsAsc,
                // getAllRewardsLeastRecentFirst,
                // getAllRewardsMostRecentFirst,
                // getReward
                };