import express from "express";
import { userAuthDetail } from "../database/userSchema.js";
const userLogin = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
userLogin.post("/userLogin", async (req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;
  await userAuthDetail.findOne({ Email: Email }).then((object) => {
    if (object) {
      bcrypt.compare(Password, object.Password, async function (err, result) {
        //users passoword email matched the database
        if (result) {
          console.log("Password is correct");
          const access = jwt.sign(
            { Email: Email },
            process.env.ACCESS_KEY_SECRET,
            { expiresIn: "20m" }
          );
          const refresh = jwt.sign(
            { Email: Email },
            process.env.REFRESH_KEY_SECRET,
            { expiresIn: "1d" }
          );
          await userAuthDetail.updateOne(
            { Email: Email },
            { Access: access, Refresh: refresh }
          );
          res.json({ Access: access, Refresh: refresh });
        }
        //user email was not found in the database
        else {
          res.status(401).json({ message: "Password is wrong" });
        }
      });
    } else {
      res.status(401).json({ message: "No Account found" });
    }
  });
});
export default userLogin;
