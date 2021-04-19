const postsRouter = require("express").Router();
const { check, validationResult } = require("express-validator");
const Post = require("../models/post");
const middleware = require("../utils/middleware");
const logger = require("../utils/logger");

postsRouter.post(
  "/",
  middleware.tokenExtractor,
  check("title").not().isEmpty(),
  check("programmingLang").not().isEmpty(),
  check("workPlace").not().isEmpty(),
  async (req, res) => {
    const {
      title,
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
        user: req.user.id,
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

postsRouter.get("/",
middleware.limitExtractor,
middleware.pageExtractor,
middleware.filterExtractor,
middleware.sortingExtractor,
middleware.fuzzySearchExtractor,
async (req, res, next) => {
  req.model = Post;
  req.populate = ["user"];
  next();
},
middleware.modelResolver);

postsRouter.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user");
    res.json(post);
  } catch (e) {
    res.status(404).json({ "error": "no such post found" });
  }
});

module.exports = postsRouter;
