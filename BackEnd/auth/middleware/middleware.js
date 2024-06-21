import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userAuthDetail } from "../../database/userSchema";
dotenv.config();
function authenticateAccessToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const access = authHeader && authHeader.split(" ")[1];
  const Email = req.body.Email;
  if (access) {
    userAuthDetail.findOne({ Email: Email }).then((object) => {
      if (object.Access == access) {
        jwt.verify(
          access,
          process.env.ACCESS_KEY_SECRET,
          function (decoded, err) {
            if (err) {
              if (err.name == "TokenExpiredError") {
                res.status(403).json({ message: "Access token expired" });
              } else {
                res.status(400).json({ message: "Some error occcured" });
              }
            } else {
              if (decoded == Email) next();
            }
          }
        );
      } else {
        res.status(400).json({
          message: "Tampering with the account detected login again please",
        });
      }
    });
  }
}
