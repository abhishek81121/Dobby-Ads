import mongoose from "mongoose";
const ImagesSchema = new mongoose.Schema({
  ImageName: String,
  image_buffer: Buffer,
});
const storageSchema = new mongoose.Schema({
  Email: String,
  Images: [ImagesSchema],
});
const storageModel = mongoose.model("ImagesOfUser", storageSchema);
export default storageModel;
