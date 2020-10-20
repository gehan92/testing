const express = require('express');
const app =  express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer')
const Joi = require('@hapi/joi');
const jwt=require('jsonwebtoken')

//import routes
const userRoute =   require('./routes/user');
const rewardRoute= require('./routes/reward')
const admin_rewardRoute= require('./routes/admin_reward')
//  const freeMembershipRoute =   require('./routes/freeMembership');

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
// app.use('/api/user',freeMembershipRoute);
app.use('/api/user',rewardRoute);

app.use('/api/user',admin_rewardRoute);

app.listen(3000,()=>console.log('Server Up running'));