// TODO: Create User Routes
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const config = require("../utils/config");
const logger = require("../utils/logger");
const middleware = require('../utils/middleware');

const User = require("../models/user");
const Student = require('../models/student');
const Company = require('../models/company');

router.post('/register',
check('name').not().isEmpty(),
check('email').isEmail(),
check('password').isLength({min:5}),
async (req,res) => {

    //Validate data
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.status(400).json({ errors: validationErrors.array() })
    }
    try {

        let { type, name, email, password, address, description } = req.body;
        type = type.toLowerCase();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        let user;

        switch (type) {
            case "student":
                const { birthDate, school } = req.body;
                user = new Student({name, email, password: hashedPassword, address, description, birthDate, school});
                await user.save();
                break;
            case "company":
                const { creationDate, activity } = req.body;
                user = new Company({ name, email, password: hashedPassword, address, description, creationDate, activity});
                await user.save();
                break;
        }
        //Token
        const payload = { user: { id:user.id }, };
        const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: 360000 })

        res.json({ "token": token });        
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ "error": "Error registering user!" });
    }
});
router.post('/login',
check('email').isEmail(),
check('password').isLength({min:5}),
async (req, res) => {

    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.status(400).json({ errors: validationErrors.array() })
    }

    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
        const passwordCorrect = await bcrypt.compare(password, user.password);

        if (!passwordCorrect) {
            res.status(400).json({ "error": "wrong password" });
        }

        const payload = { user: { id: user.id }, };
        const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: 360000 });
        res.json({ "token": token });        

    } else {
        res.status(404).json({ "error": "email does not exist" });
    }
});

router.get('/login', 
middleware.tokenExtractor,
async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        logger.info(user);
        res.json(user);
    } catch {
        res.status(500).json({ "error": "cannot find user" });
    }
});

module.exports = router;