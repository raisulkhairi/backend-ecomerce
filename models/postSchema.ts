import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imgPath: { type: String, required: true },
});
const post = mongoose.model('post',postSchema);
export default post;