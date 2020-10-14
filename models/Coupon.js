const  mongoose = require('mongoose')
const jwt=require('jsonwebtoken');

const couponSchema = new mongoose.Schema({

    TransactionNo:{
            type: String,
            required: true,
            min:6,
            max:255
            },

    Earned:{
            type: String,
            required: true,
            min:6,
            max:255
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
    couponSchema.methods.generateCouponAuthToken = async function (){
    const Coupon = this
    const token = jwt.sign({_id:Coupon._id.toString() },process.env.TOKEN_SECRET_COUPON);
    Coupon.tokens =  Coupon.tokens.concat({token})
    await Coupon.save()
    return token
    }

module.exports=mongoose.model('coupon',couponSchema);