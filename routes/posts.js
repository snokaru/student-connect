const postsRouter = require("express").Router();
const { check, validationResult } = require("express-validator");
const Post = require("../models/post");
const Comment = require("../models/comment");
const middleware = require("../utils/middleware");

postsRouter.post(
  "/",
  middleware.tokenExtractor,
  check("title").not().isEmpty(),
  check("programmingLang").not().isEmpty(),
  check("workPlace").not().isEmpty(),
  async (req, res) => {
    const { title, description, programmingLang, workHours, workPlace } =
      req.body;

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
      const id = post.id;
      Post.findById(id)
        .populate("user")
        .then((post) => {
          res.json(post);
        });
    } catch (error) {
      res.status(500).send({ error: "Error posting!" });
    }
  }
);

postsRouter.get(
  "/",
  middleware.limitExtractor,
  middleware.pageExtractor,
  middleware.filterExtractor,
  middleware.sortingExtractor,
  middleware.fuzzySearchExtractor,
  async (req, res, next) => {
    req.model = Post;
    req.populate = [
      { path: "user" },
      { path: "comments", populate: { path: "user" } },
    ];
    next();
  },
  middleware.modelResolver
);

postsRouter.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate([
      { path: "user" },
      { path: "comments", populate: { path: "user" } },
    ]);
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: "no such post found" });
  }
});
postsRouter.put("/:id/comment", async (req, res) => {
  try {
    const action = req.header("action");
    let comment = null;
    let post = null;
    let user,
      body,
      id = null;
    switch (action) {
      case "add":
        user = req.body.user;
        body = req.body.body;
        comment = new Comment({ user, body });
        await comment.save();
        const commId = comment.id;
        post = await Post.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { comments: commId } },
          { new: true }
        ).populate([
          { path: "user" },
          { path: "comments", populate: { path: "user" } },
        ]);
      case "delete":
        id = req.body.id;

        await Comment.findByIdAndRemove(id);
        post = await Post.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { comments: id } },
          { new: true }
        ).populate([
          { path: "user" },
          { path: "comments", populate: { path: "user" } },
        ]);
      case "modify":
        id = req.body.id;
        user = req.body.user;
        body = req.body.body;
        const updated = req.body.updated;
        await Comment.findByIdAndUpdate(id, {
          user: user,
          body: body,
          updated: updated,
        });
        post = await Post.findById(req.params.id).populate([
          { path: "user" },
          { path: "comments", populate: { path: "user" } },
        ]);
    }
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: "post or comment not found" });
  }
});
postsRouter.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: "cant delete post" });
  }
});

module.exports = postsRouter;
