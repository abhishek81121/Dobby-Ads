import express from "express";
import bcrypt from "bcrypt";
import { userAuthDetail } from "../database/userSchema.js";
import storageModel from "../database/storageSchema.js";
var userSignUp = express.Router();
//handling the post request for signing  up
userSignUp.post("/userSignUp", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.Password, salt, async function (err, hash) {
      const data = {
        Email: req.body.Email,
        Password: hash,
        Access: null,
        Refresh: null,
      };

      if (!(await userAuthDetail.findOne({ Email: data.Email }))) {
        const user = new userAuthDetail(data);
        const im = new storageModel({ Email: data.Email, Images: [] });
        await user.save();
        await im.save();
        res.json(data);
      } else {
        console.log("exists");
        res.status(409).json({ message: "Account already exist" });
      }
    });
  });
});

export default userSignUp;
