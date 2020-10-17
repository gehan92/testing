const router = require('express').Router();
const FreeMembership = require('../models/FreeMembership');

router.post('/FreeMembership',async(req,res)=>{

    const freeMembership = new FreeMembership(req.body)
    console.log(freeMembership)
    try{
     await userRewards.save()
    //  const token =await userRewards.generateAuthToken()
    //  console.log(token)
         res.status(201).send(freeMembership)
     }
 catch(e){
     res.status(400).send(e);
 }


})

// router.get('/FreeMembership',(req,res)=>{




// })





// module.exports = router;