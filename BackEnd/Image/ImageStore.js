import express from "express";
import storageModel from "../database/storageSchema.js";
import multer from "multer";
const imageStore = express.Router();
const upload = multer();
imageStore.post("/image/upload", upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);
    const Email = req.body.Email;
    const imageBuffer = req.file.buffer;
    console.log(Email);
    let user = await storageModel.findOne({ Email: Email });
    if (!user) {
      console.log(404);
      return res.status(404).send("User not found");
    }

    user.Images.push({ ImageName: "dsfs", image_buffer: imageBuffer });
    await user.save();

    res.status(200).send("Image uploaded successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
});
export default imageStore;
