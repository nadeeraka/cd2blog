import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  postId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  comments: { type: Array },
  photo: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
