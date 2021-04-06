const express = require("express");
const logger = require("./utils/logger");
const config = require("./utils/config");
const mongoose=require("mongoose");
const app = express();

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
}).then(()=>logger.info("Connected to MongoDB"));

app.use(express.json());

app.use('/api/login', require('./routes/login'));
app.use('/api/users', require('./routes/users'));

module.exports = app;
