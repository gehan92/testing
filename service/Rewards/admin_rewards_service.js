const Reward = require('../../models/Reward');

const addAllRewards =async(req,res)=>{
    const userRewards = new Reward(req.body)
 try{
     await userRewards.save()
     const token =await userRewards.generateAuthToken()
     res.status(201).send({userRewards,token})
     }
 catch(e){
     res.status(400).send(e);
 }
}

const getAllRewards = async(req,res)=>{
    try{
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 10;
        console.log(pagination)
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const reward  =  await Reward.find()
        .skip((page - 1)* pagination)
        .limit(pagination)

        // console.log(reward)
        res.send(reward)
        }catch(e){
                res.status(500).send()
        }
}

const deleteReward = async (req,res)=>{
    try{
        const deleteReward =await Reward.findByIdAndDelete(req.params.id);
        if(!deleteReward){
            return res.statusMessage(404).send()
        }
        res.send(deleteReward);
        }catch (e){
            res.status(500).send();
        }
}


const updateRewards = async function(req,res)  { 
       const _id = req.params.id
    if(_id){
     try{
        const reward = await Reward.findOneAndUpdate(_id, req.body, {new: true} )
         res.send(reward)
    
     }catch (e){
        res.send(e.message)
     }
    }else
    res.status(401).json({
        message: " "
    });
 };

module.exports={
            deleteReward,
            addAllRewards,
            getAllRewards,
            updateRewards
}