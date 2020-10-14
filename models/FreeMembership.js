const mongoose = require('mongoose');
const validator = require('validator')
const membershipSchema  =new mongoose.Schema({

RankRequire:{
    type:String,
    max: 255, 
    min: 6
},
username:{
    type:String,
    max: 255, 
    min: 6
},
// email:{
//     type:String,
//     // required: true,
//     max: 255, 
//     min: 6
// },
// password:{
//     type:String
// },
// tokens:[{ 
//     token:{
//         type:String
//     }
// }],
// mobileNumber:{
//     type:String
// },
// isMobileNumberConfirmed:{
//     type:Boolean
// },
// profilePicture:{
//     type:String
// }
},{timestamps:true})

module.exports= mongoose.model('appUser',membershipSchema );