import mongoose from "mongoose";

const postSchema = mongoose.Schema({
<<<<<<< HEAD
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String], //array of strings
    selectedFile: String, //convert an image into string
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
=======
  title: String,
  message: String,
  creator: String,
  tags: [String], // array of strings
  selectedFile: String, // convert an image into string using base64
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
>>>>>>> faaed158809f0c4cad91be941004c1f12d6f5775
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;