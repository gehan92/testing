const jwt =require('jsonwebtoken');

module.exports=function(req,res,next){
    const token =req.header('Authorization').replace('Bearer','')
if(!token)return res.status(401).send('Access Denied');
try{
    const verified =jwt.verify(token,process.env.APP_SECRET);
    req.user =verified;
    next();
}catch{
    res.status(400).send('Invalid Token');
      }
}