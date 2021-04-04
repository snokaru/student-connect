const config = require("../utils/config");
const jwt = require("jsonwebtoken");

const tokenExtractor = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        res.status(401).json({"error": "no token provided"});
    }

    const decodedToken  = jwt.verify(token, config.JWT_SECRET);
    req.user = decodedToken.user;

    next();
};

module.exports = {
    tokenExtractor,
};