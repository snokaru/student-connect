const usersRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const config = require("../utils/config");
const logger = require("../utils/logger");
const middleware = require("../utils/middleware");

const User = require("../models/user");
const Student = require("../models/student");
const Company = require("../models/company");

usersRouter.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

usersRouter.post(
  "/",
  check("name").not().isEmpty(),
  check("email").isEmail(),
  check("password").isLength({ min: 5 }),
  async (req, res) => {
    //Validate data
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
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
          user = new Student({
            name,
            email,
            password: hashedPassword,
            address,
            description,
            student: { birthDate, school },
          });
          await user.save();
          break;
        case "company":
          const { creationDate, activity } = req.body;
          user = new Company({
            name,
            email,
            password: hashedPassword,
            address,
            description,
            company: { creationDate, activity },
          });
          await user.save();
          break;
        default:
          throw Error("Bad request!");
      }
      //Token
      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: "1h" });

      res.json({ token: token });
    } catch (error) {
      logger.error(error.message);
      res.status(500).send({ error: "Error registering user!" });
    }
  }
);

usersRouter.get("/:id", async (request, response, next) => {
  const id = request.params.id;

  try {
    const searchedUser = await User.findById(id);
    response.json(searchedUser);
  } catch (error) {
    logger.error(error.message);
    response.status(500).send({ error: "No such user found!" });
  }
});

/* 
 ! Only able to PUT if id matches token id.
 TODO: Superuser might need to be able to modify other users' info.
*/
usersRouter.put(
  "/:id",
  middleware.tokenExtractor,
  async (request, response, next) => {
    const requestId = request.params.id;
    const requesterId = request.user.id;

    if (requestId !== requesterId)
      response
        .status(401)
        .json({ error: "only make changes to your own user!" });

    next();
  },
  middleware.userUpdater
);

module.exports = usersRouter;
