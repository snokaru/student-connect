const sharp = require("sharp");
const mkdirp = require("mkdirp");
const fs = require("fs");

const config = require("../utils/config");
const logger = require("../utils/logger");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const tokenExtractor = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({ error: "no token provided" });
  }

  const decodedToken = jwt.verify(token, config.JWT_SECRET);
  req.user = decodedToken.user;

  next();
};

const userUpdater = async (request, response, next) => {
  logger.info("In user updater!");
  logger.info(request.body);

  const {
    name,
    address,
    description,
    student,
    company,
    contact,
  } = request.body;
  if (student && company) {
    request
      .status(400)
      .json({ error: "can't update both company and student info" });
  }
  try {
    let searchedUser = await User.findById(request.user.id);

    // Handling New Profile Picture Upload
    if (request?.files?.profilePicture) {
      let newProfilePicture = request.files.profilePicture;
      let acceptedFileFormats = ["jpg", "jpeg", "png"];
      let fileFormat = newProfilePicture.name.split(".")[1];
      if (!fileFormat in acceptedFileFormats) {
        throw Error("Unaccepted file format!");
      }

      // create directory for sharp image move
      let uploadFolder = `public/img/${searchedUser.id}/`;
      let uploadPath = uploadFolder + `profile.${fileFormat}`;
      await mkdirp(uploadFolder);

      // Resize image to 200x200
      await sharp(newProfilePicture.tempFilePath)
        .resize(200, 200)
        .toFile(uploadPath);

      searchedUser.profilePicture = uploadPath;

      // Remove temporary file
      fs.unlinkSync(newProfilePicture.tempFilePath);
    }

    searchedUser.name = name === undefined ? searchedUser.name : name;
    searchedUser.address =
      address === undefined ? searchedUser.address : address;
    searchedUser.description =
      description === undefined ? searchedUser.description : description;
    searchedUser.contact.linkedin =
      contact?.linkedin === undefined
        ? searchedUser.contact?.linkedin
        : contact?.linkedin;
    searchedUser.contact.facebook =
      contact?.facebook === undefined
        ? searchedUser.contact?.facebook
        : contact?.facebook;
    searchedUser.contact.github =
      contact?.github === undefined
        ? searchedUser.contact?.github
        : contact?.github;
    searchedUser.contact.phone =
      contact?.phone === undefined
        ? searchedUser.contact?.phone
        : contact?.phone;
    searchedUser.contact.others =
      contact?.others === undefined
        ? searchedUser.contact?.others
        : contact?.others;

    if (student && searchedUser.student) {
      searchedUser.student.birthDate =
        student?.birthDate === undefined
          ? searchedUser.student?.birthDate
          : student?.birthDate;
      searchedUser.student.school =
        student?.school === undefined
          ? searchedUser.student?.school
          : student?.school;
    } else if (company && searchedUser.company) {
      searchedUser.company.creationDate =
        company?.creationDate === undefined
          ? searchedUser.company?.creationDate
          : company?.creationDate;
      searchedUser.company.activity =
        company?.activity === undefined
          ? searchedUser.company?.activity
          : company?.activity;
    }

    await searchedUser.save();
    response.json(searchedUser);
  } catch (error) {
    logger.info(error);
    response.status(400).json({ error: "no such user found!" });
  }

  next();
};

/*
* Adds a request.limit that specifies the limit of elements on a given page (default 100)
*/
const limitExtractor = async (req, res, next) => {
  console.log(req.query);
  if (req.query.limit)
    req.limit = parseInt(req.query.limit);
  else
    req.limit = 100; // set a default limit if none provided 
  next();
};

/*
* Adds a request.page that specifies the page to use (default 1)
*/
const pageExtractor = async (req, res, next) => {
  if (req.query.page)
    req.page = parseInt(req.query.page);
  else
    req.page = 1; // set a default page if none provided
  next();
};

/*
* Adds a request.sort field to a request that specifies what parameters to sort by 
*/
const sortingExtractor = async (req, res, next) => {
  if (req.query.sort_by) 
    req.sort = req.query.sort_by; 
  next();
};

/*
* Adds a request.filter field to a request that specifies the filters that are to be applied
*/
const filterExtractor = async (req, res, next) => {
  req.filter = {}
  for (let field in req.query) {
    if (!["limit", "sort_by", "page", "fuzzy"].includes(field))
      req.filter[field] = req.query[field];
  }
  next();
};

const fuzzySearchExtractor = async (req, res, next) => {
  req.fuzzy = req.query.fuzzy;
  next();
};

/*
* Assuming that a req.model with the given model class and optionally a req.populate has been saved in previous functions
* this function applies provided filters, sorting and pagination on the given model and returns
* it as JSON or errors out
*/
const modelResolver = async (req, res) => {
  try {
    let query;
    if (req.fuzzy) {
      query = req.model.fuzzySearch({query: req.fuzzy, minSize: 4});
    } else {
      query = req.model.find(req.filter);
    }
    query.populate(req.populate).sort(req.sort).limit(req.limit).skip(req.limit * (req.page - 1));
    const requestedData = await query.exec();
    res.json(requestedData);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      "error": "bad request"
    });
  }
};

module.exports = {
  tokenExtractor,
  userUpdater,
  pageExtractor,
  limitExtractor,
  sortingExtractor,
  filterExtractor,
  modelResolver,
  fuzzySearchExtractor,
};
