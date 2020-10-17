const router = require('express').Router();
const abc = require('../models/Reward')

var j  = 0;
for(i=1;i<10;i++){

    j=j+i
}


const table1 = (req,res)=>{

let table = abc.find(res.body.name)

}


var name  = j


module.exports = table1