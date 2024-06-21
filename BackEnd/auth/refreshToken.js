import express from "express";
import { userAuthDetail } from "../database/userSchema.js";
import jwt from "jsonwebtoken";
const refreshToken = express.Router();
import dotenv from "dotenv";
dotenv.config();
refreshToken.post("/refreshToken", (req, res) => {
  const access = req.body.Access;
  const refresh = req.body.Refresh;
  const Email = req.body.Email;
  userAuthDetail.findOne({ Email: Email }).then((object) => {
    if (object) {
      if (object.Refresh == refresh) {
        jwt.verify(
          refresh,
          process.env.REFRESH_KEY_SECRET,
          function (err, decoded) {
            if (err) {
              res.status(403).json({
                message: "Login again please",
              });
            } else if (decoded == Email) {
              const newAccess = jwt.sign(
                { Email: Email },
                process.env.ACCESS_KEY_SECRET,
                { expiresIn: "20m" }
              );
              const newRefresh = jwt.sign(
                { Email: Email },
                process.env.REFRESH_KEY_SECRET,
                { expiresIn: "1d" }
              );
              userAuthDetail.updateOne(
                { Email: Email },
                { Access: newAccess, Refresh: newRefresh }
              );
            } else {
              res.status(400).json({
                message:
                  "Tampering with the account detected login again please",
              });
            }
          }
        );
      } else {
        res.status(400).json({
          message: "Tampering with the account detected login again please",
        });
      }
    }
  });
});
export default refreshToken;
