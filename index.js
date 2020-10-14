const express = require('express');
const app =  express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer')
const Joi = require('@hapi/joi');
const jwt=require('jsonwebtoken')

//import routes
const userRoute =   require('./routers/user');
const rewardRoute= require('./routers/reward')
const postRoute =   require('./routers/posts');

dotenv.config();
mongoose.connect(process.env.DB_CONNECT,
    { 
        useNewUrlParser: true, 
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },() => console.log('connected to db')
);
//middleware
app.use(express.json());
// route middle
app.use('/api/user',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/user',rewardRoute);

app.listen(3000,()=>console.log('Server Up running'));