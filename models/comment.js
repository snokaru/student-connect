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
  updated: {
    type: String,
    default: "",
  },
});
commentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
