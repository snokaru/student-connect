const express = require("express");
const logger = require("./utils/logger");
const config = require("./utils/config");

const app = express();

// TODO: Add DB Connection

app.use(express.json());
app.use('/user',require('./routes/user'))
/* 
 * Example route. Routes are supposed to be created in ~/routes using an express *Router()* and imported from there.
*/
app.get("/", async (req, res) => {
    res.status(200).json({"message": "Hello, World!"});
});

module.exports = app;
