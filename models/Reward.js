const  mongoose = require('mongoose')
const jwt=require('jsonwebtoken');
const { string } = require('@hapi/joi');
const rewardSchema = new mongoose.Schema({

        isCompleted: {
                type: Boolean,
                default: false
                 },

        title_1:{
                type: String,
                },

        title_2:{
                type: String,
                },

        validity:{
                 type: String,
                 min:6,
                 max:255,
                },
        rank:
                {
                type: String,
                min:6,
                max:255
                },

        points:{
                type: String,
                },
        date:  {
                type:Date,
                default: Date.now
                },
        tokens:[{
                token:{
                        type:String,
                        required:true
                }
        }]
        },{
        timestamps:true
        });
        
        rewardSchema.methods.generateAuthToken = async function (){
        const Reward = this
        const token = jwt.sign({_id:Reward._id.toString() },process.env.TOKEN_SECRET);
        Reward.tokens =  Reward.tokens.concat({token})
        await Reward.save()
        // console.log(token)
        return token
        }
        const Reward = mongoose.model('Reward_c', rewardSchema)
        module.exports = Reward