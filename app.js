const express = require("express");
const logger = require("./utils/logger");
const config = require("./utils/config");
const mongoose=require("mongoose");
const app = express();

// TODO: Add DB Connection
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
}).then(()=>logger.info("Connected to MongoDB"));

app.use(express.json());
app.use('/api/user',require('./routes/user'))
/* 
 * Example route. Routes are supposed to be created in ~/routes using an express *Router()* and imported from there.
*/
app.get("/", async (req, res) => {
    res.status(200).json({"message": "Hello, World!"});
});

module.exports = app;
