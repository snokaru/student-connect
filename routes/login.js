const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const loginRouter = express.Router();

const config = require("../utils/config");
const logger = require("../utils/logger");
const middleware = require("../utils/middleware");

const User = require("../models/user");

loginRouter.get("/", middleware.tokenExtractor, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    logger.info(user);
    res.json(user);
  } catch {
    res.status(500).json({ msg: "Cannot find user" });
  }
});

loginRouter.post(
  "/",
  check("email").isEmail(),
  check("password").isLength({ min: 5 }),
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }

    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      const passwordCorrect = await bcrypt.compare(password, user.password);

      if (!passwordCorrect) {
        return res.status(400).json({ msg: "Invalid password!" });
      }

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: "1h" });
      res.json({ token: token });
    } else {
      return res.status(400).json({ msg: "Invalid email!" });
    }
  }
);

loginRouter.put("/", middleware.tokenExtractor, middleware.userUpdater);

module.exports = loginRouter;
