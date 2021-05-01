const commentsRouter = require("express").Router();
const Comment = require("../models/comment");
commentsRouter.post("/", async (req, res) => {
  const { user, body } = req.body;
  try {
    let comment = new Comment({ user, body });
    await comment.save();
    const id = comment.id;
    Comment.findById(id)
      .populate("user")
      .then((post) => {
        res.json(post);
      });
  } catch (error) {
    res.status(500).send({ error: "Error posting!" });
  }
});
commentsRouter.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: "cant delete comment!" });
  }
});
module.exports = commentsRouter;
