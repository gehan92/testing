//VALIDATION

const Joi = require('@hapi/joi');



// VALIDATION

const updateValidation = (data) =>{

    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    };

    // console.log("sssssss")

    return Joi.Validate(data,schema);
};


 module.exports.updateValidation=updateValidation;


