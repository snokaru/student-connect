const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
    required: true,
  },
});
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
