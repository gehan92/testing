const mongoose = require('mongoose');
const validator = require('validator')
const membershipSchema  =new mongoose.Schema({

RankRequire:{
    type:String,
   },
userId:{
        type:String
},   
username:{
        type:String,
   },
},{timestamps:true})

module.exports= mongoose.model('membership',membershipSchema );