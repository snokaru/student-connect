const config = require("../utils/config");
const logger = require("../utils/logger");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const tokenExtractor = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        res.status(401).json({"error": "no token provided"});
    }

    const decodedToken  = jwt.verify(token, config.JWT_SECRET);
    req.user = decodedToken.user;

    next();
};

const userUpdater = async (request, response, next) => {

    logger.info("In user updater!")

    const { name, address, description, student, company } = request.body;
    if (student && company) {
        request.status(400).json({ "error": "can't update both company and student info" });
    }
    try {
        let searchedUser = await User.findById(request.user.id);
        logger.info(searchedUser);
        searchedUser.name = name === undefined ? searchedUser.name : name; 
        searchedUser.address = address === undefined ? searchedUser.address : address;
        searchedUser.description = description === undefined ? serachedUser.description : description;

        if (student && searchedUser.student) {
            searchedUser.student.birthDate = student?.birthDate === undefined ? searchedUser.student?.birthDate : student?.birthDate;
            searchedUser.student.school = student?.school === undefined ? searchedUser.student?.school : student?.school;
        }
        else if (company && searchedUser.company) {
            searchedUser.company.creationDate = company?.creationDate === undefined ? searchedUser.company?.creationDate : company?.creationDate;
            searchedUser.company.activity = company?.activity === undefined ? searchedUser.company?.activity : company?.activity;
        }

        await searchedUser.save();
        response.json(searchedUser);
    } catch (error) {
        logger.info(error);
        response.status(400).json({ "error": "no such user found!" });
    }

    next();
};

module.exports = {
    tokenExtractor,
    userUpdater,
};