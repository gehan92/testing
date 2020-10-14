const  mongoose = require('mongoose')
const jwt=require('jsonwebtoken');
const { string } = require('@hapi/joi');

const rewardHeaderSchema = new mongoose.Schema({
        rank:
                {
                type: String,
                },

        points:{
                type: String,
               }
 });
 module.exports=mongoose.model('UserRanksAndPoints',rewardHeaderSchema);