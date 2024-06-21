import express from "express";
var userSignUp = express.Router();
//handling the post request for signing  up
userSignUp.post("/signUp", (req, res) => {
  const data = {
    Email: req.body.Email,
    Password: req.body.Password,
  };

  res.json(data);
});

export default userSignUp;
