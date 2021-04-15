const postsRouter = require("express").Router();
const { check, validationResult } = require("express-validator");
const Post = require("../models/post");
const middleware = require("../utils/middleware");
postsRouter.post(
  "/",
  check("title").not().isEmpty(),
  check("programmingLang").not().isEmpty(),
  check("workPlace").not().isEmpty(),
  async (req, res) => {
    const {
      title,
      user,
      description,
      programmingLang,
      workHours,
      workPlace,
    } = req.body;

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      res.status(400).send({ errors: validationErrors.array() });
    }
    try {
      let post = new Post({
        title,
        user,
        description,
        programmingLang,
        workHours,
        workPlace,
      });
      await post.save();
      Post.findOne({ title })
        .populate("user")
        .then((post) => {
          res.json(post);
        });
    } catch (error) {
      res.status(500).send({ error: "Error posting!" });
    }
  }
);

module.exports = postsRouter;
