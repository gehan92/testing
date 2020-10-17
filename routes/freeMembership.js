const router = require('express').Router();
const FreeMembership = require('../models/FreeMembership');
router.post('/FreeMembership',async(req,res)=>{

    const freeMembership = new FreeMembership(req.body)
        try{
     await userRewards.save()
              res.status(201).send(freeMembership)
     }
 catch(e){
     res.status(400).send(e);
 }
})
module.exports = router;