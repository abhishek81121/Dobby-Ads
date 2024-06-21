import express from "express";
import { userAuthDetail } from "../database/userSchema";
const userLogin = express.Router();
userLogin.post("/userLogin", async (req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;
  await userAuthDetail.findOne({ Email: Email }).then((Object) => {
    console.log(Object);
  });
  res.json();
});
