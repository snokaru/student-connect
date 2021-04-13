const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const os = require("os");

const logger = require("./utils/logger");
const config = require("./utils/config");

const app = express();

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => logger.info("Connected to MongoDB"));

app.use(cors());

app.use(fileUpload({
  createParentPath: true,
  safeFileName: true,
  useTempFiles: true,
  tempFileDir: "tmp/",
  parseNested: true
}));

app.use(express.json());

app.use('/public', express.static('public'));

app.use("/api/login", require("./routes/login"));
app.use("/api/users", require("./routes/users"));

module.exports = app;
