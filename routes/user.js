// TODO: Create User Routes
const express = require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require('bcryptjs');
const { check, validationResult } = require('express-validator');
const router=express.Router();
const middleware=require('../utils/middleware');
const Student=require('../models/student');
const Company=require('../models/company');


router.post('/register',
[check('name').not().isEmpty(),
check('email').isEmail(),
check('password').isLength({min:5}),
],async (req,res)=>{
    //Validate data
    const validationErrors=validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.status(400).json({errors:validationErrors.array()})
    }
    const {type}=req.body;
    type=type.toLowerCase();
    try {
        const {name,email,password,address,description}=req.body;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        switch(type){

            case "student":
                //Hash
                const {birthDate,school}=req.body;
                let user=new Student({name,email,password:hashedPassword,address,description,birthDate,school});
                await user.save();
                break;
            case "company":
                //Hash
                const {creationDate,activity}=req.body;
                user=new Company({name,email,password:hashedPassword,address,description,creationDate,activity});
                await user.save();
                break;
        }
        //Token
        const payload={
            user:{
                id:user.id
            }
        };
        jwt.sign(payload,config.JWT_SECRET,{expiresIn: 360000},(err,token)=>{
            if(err)throw err;
            res.json(token);
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(`Error registering user ${email}!`);
    }
    
})
router.post('/login',(req,res)=>{

})
router.get('/login',(req,res)=>{

})
module.exports=router;