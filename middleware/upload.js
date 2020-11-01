const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
destination: function(req,file,cb){

    cb(null,'./uploads')

},
filename :function(req,file,cb){
    // let ext =path.extname(file.originalname)
    cb(null,Data.now()+ file.originalname)
}

})

//upload parameeters

var upload=multer({

    storage: storage,
    // fileFilter:function(req,file,callback){
    //     if(
    //         file.mimetype == "image/png" ||
    //         file.mimetype == "image/jpg"
    //     ){
    //         callback(null,true)
    //     }else{
    //         console.log('only jpg & png file support')
    //         callback(null,false)
    //     }

    // },
    limits:{
        fileSize: 1024 * 1024 * 2
    }

})
// console.log(upload)
module.exports = upload
