const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    default: "",
  },
  programmingLang: {
    type: String,
    required: true,
  },
  workHours: {
    type: String,
    default: "",
  },
  workPlace: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
