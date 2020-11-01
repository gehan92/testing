const Reward = require('../../models/Reward');
const upload = require('../middleware/multer')
const cloudinary = require('../middleware/cloudinary')
const fs = require('fs')
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

const addAllRewards =async(req,res)=>{
    const userRewards = new Reward(req.body)
    const uploader = async(path)=>await cloudinary.uploads(path,'Images')
    const urls =[]
    const files = req.files
    // console.log(files)
    for (const file of files){
        const {path}=file
        const newPath = await uploader(path)
        // console.log(uploader)
        urls.push(newPath)
        fs.unlinkSync(path)

    }

 try{

     await userRewards.save()
     const files =req.urls;
     const token =await userRewards.generateAuthToken()
     res.status(201).send({userRewards,token,files})
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