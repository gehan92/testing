const router = require('express').Router();
const auth = require('../middleware/auth');
const Reward = require('../models/Reward');
 const multer = require('multer')
// const path = require('path')
 const bodyParser = require('body-parser');
const RewardService = require('../service/Rewards/rewardServices')
const upload = require('../middleware/multer')
const cloudinary = require('../middleware/cloudinary')
// const RewardService1 = require('../service/Rewards/rewardServices1')
// const upload1 =require('../middleware/upload')


// var multer  = require('multer');
// var upload = multer({ dest: 'upload/'});
// var fs = require('fs');

// /** Permissible loading a single file, 
//     the value of the attribute "name" in the form of "recfile". **/
// var type = upload.single('recfile');

// router.post('/upload', type, function (req,res) {

//   /** When using the "single"
//       data come in "req.file" regardless of the attribute "name". **/
//   var tmp_path = req.file.path;
//   console.log(tmp_path)
  
// //   let reward = new Reward({
// //     title_1:req.body.title_1,
// //     title_2:req.body.title_2,
// //     image :req.file.path,

// // })




//   /** The original name of the uploaded file
//       stored in the variable "originalname". **/
//   var target_path = 'uploads/' + req.file.originalname;

  

 

//   /** A better way to copy the uploaded file. **/
//   var src = fs.createReadStream(tmp_path);
//   console.log(src)
//   var dest = fs.createWriteStream(target_path);
//   console.log(dest)
//   src.pipe(dest);
//   src.on('end', function() { res.send('complete'); });
//   res.send(reward)
//   src.on('error', function(err) { res.send('error'); });

// });







// var multer  = require('multer');
// var upload = multer({ dest: 'upload/'});
// var fs = require('fs');

// /** Permissible loading a single file, 
  




// the value of the attribute "name" in the form of "recfile". **/
// var type = upload.single('recfile');

// router.post('/upload', type, function (req,res) {

//   /** When using the "single"
//       data come in "req.file" regardless of the attribute "name". **/
//   var tmp_path = req.file.path;

//   /** The original name of the uploaded file
//       stored in the variable "originalname". **/
//   var target_path = 'uploads/' + req.file.originalname;
//     let reward = new Reward({
//     title_1:req.body.title_1,
//     title_2:req.body.title_2,
//     image :req.file.originalname,

// })
// res.send(reward)
//   /** A better way to copy the uploaded file. **/
//   var src = fs.createReadStream(tmp_path);
//   var dest = fs.createWriteStream(target_path);
//   src.pipe(dest);
//   src.on('end', function() { res.send('complete'); });
  
//   src.on('error', function(err) { res.send('error'); });

// });






//difine storage
// const path = require('path')
// const multer = require('multer')

//------------------------------------------

// var storage = multer.diskStorage({
//     destination: function(req,file,callback){
    
//         callback(null,'./uploads')
    
//     },
//     filename :function(req,file,callback){
//         // let ext =path.extname(file.originalname)
//         callback(null,Data.now()+ file.originalname)
//     }
    
//     })

//     //upload parameeters

// var upload=multer({

//     storage: storage,
   
//     limits:{
//         fieldSize: 1024 * 1024 * 3
//     }

// })

// router.post('/rewards',async(req,res)=>{
//     await  RewardService.addAllRewards(req,res)
// });

//------------------------------------------


// const upload = multer({

//     dest:'avatars'
// })

// router.post('/rewardsImage',upload.array('avatar',5),(req,res)=>{
//     // await  RewardService.addAllRewards(req,res)
//     res.send()

// });









// router.post('/store',upload.single('image'),async(req,res)=>{
//    console.log(request.file)
//     let reward = new Reward({
//         title_1:req.body.title_1,
//         title_2:req.body.title_2,
//         image :req.file.filename,

//     })
//     if(req.file){
//         reward1.avatar = req.file.path
//     }
//     console.log(reward1)
//     reward1.save()
//     .then(response =>{
//         res.json({
//             message:'Employee added successfully!'
//         })
//     })
//     .catch(error =>{

//         res.json({
//             message:'An error!'
//         })
//     })







    // try{
    //     reward =await reward.save();
    //     response.redirect('reward/${reward.slug}')
    // }catch(error){
    //     console.log(error)
    // }
   
    // await  RewardService.addAllRewards(req,res)
// });

// var Storage=multer.diskStorage({
//     destination:"./uploads",filename:(req,file,cb)=>{
//         cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
//     }
// })


// var upload = multer({
//     storage:Storage
// }).single('file')

// router.post('/upload',upload,function(req,res,next){
//     var imageFile =req.file.filename;
// var success =req.file.filename +"uploaded successfully";

// var imageDetails= new Reward({
//     imagename:imageFile
    
//     })
//     imageDetails.save(function(err,doc){
//         if(err) throw err;

//     })
         
    

// res.send('upload-file',{title:'Upload File',success:success })



// })

//////////////////////////////////////////////////////
// use the middleware of body parser


// router.use(bodyParser.urlencoded({extended:false}))


const fs = require('fs')


router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads')
//     },
//     filename:function(req,file,cb){

//         cb(null,file.filename + '-'+Date.now()+path.extname(file.originalname))
//     }
// }) 
// const fileFilter =(req,file,cb)=>{
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){

//         cb(null,true)
//     }
//     else{
//         cb({message:'Unsupported File Format'},false)
//     }

// }
// var upload = multer({
//     storage:storage,
//     limits:{fileSize:1024*1024},
//     fileFilter:fileFilter
// })





router.use('/upload-images',upload.array('image',5),async(req,res)=>{
    
    const uploader = async(path)=>await cloudinary.uploads(path,'Images')
    if(req.method === 'POST')
    {
        console.log("------------------------5555555555555555s------")
       
        const urls =[]
        const files = req.files
        // console.log(files)
        for (const file of files){
            const {path}=file
            const newPath = await uploader(path)
            // console.log(uploader)
            urls.push(newPath)
            fs.unlinkSync(path)

        }
        console.log(urls)
        res.status(200).json({

             message:'Images upload',
             data:urls
           
        })
        // console.log(urls)
    }else{
        res.status(405).json({
            err:"Image not uploaded"
        })
    }


})

// router.post("/uploadFile",upload.array('myFiles',12),async(req,res,next)=>{
// await  RewardService.getAllRewards(req,res)    


// if(!files){
//     const error = new Error("please choose file")
//     error.httpStatusCode = 400;
//     return next(error);

// }
// res.send(files)

// })

///////////////////////////////////////////////////////////////
//cloud

// router.use(bodyParser.urlencoded({extended:false}))
// router.use(bodyParser.json())

router.post('/dataImage',upload.array('image',5),auth,async(req,res)=>{
    await  RewardService.getAllRewards(req,res)
    
});

 


///////////////////////////////////////////////////////////////////////////////
router.get('/rewards',auth,async(req,res)=>{
    await  RewardService.getAllRewards(req,res)
    
});

router.get('/rewardsDesc',auth,async(req,res)=>{
    await  RewardService.getAllRewardsDesc(req,res)
});

router.get('/rewardsAsc',auth,async(req,res)=>{
    await  RewardService.getAllRewardsAsc(req,res)
});

router.get('/rewardsLeastRecentFirst',auth,async(req,res)=>{
    await  RewardService.getAllRewardsLeastRecentFirst(req,res)
});

router.get('/rewardsMostRecentFirst',async(req,res)=>{
    await  RewardService.getAllRewardsMostRecentFirst(req,res)
});

router.get('/ClaimRewards/:id',auth,async(req,res)=>{
    await  RewardService.getReward(req,res)
});

module.exports = router;