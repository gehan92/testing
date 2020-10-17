const router = require('express').Router();
const Coupon = require('../models/Coupon');

router.post('/coupon',async(req,res)=>{
    const coupon = new Coupon(req.body)
       console.log(coupon)
       try{
        await coupon.save()
        const token =await coupon.generateCouponAuthToken()
       console.log(token)
            res.status(201).send({coupon,token})
        }
        catch(e){
        res.status(400).send(e);
    }
});
router.get('/coupon',async(req,res)=>{
    try{
        const coupon  =  await Coupon.find() 
        res.send(coupon)
        }catch(e){
                res.status(500).send()
        }
    });
    


