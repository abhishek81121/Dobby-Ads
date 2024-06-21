import express from "express";
import bcrypt from "bcrypt";
import { userAuthDetail } from "../database/userSchema.js";
var userSignUp = express.Router();
//handling the post request for signing  up
userSignUp.post("/signUp", (req, res) => {
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
        await user.save();
        res.json(data);
      } else {
        console.log("exists");
        res.status(409).json({ message: "Account already exist" });
      }
    });
  });
});

export default userSignUp;
