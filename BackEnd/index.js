import express from "express";
import userSignUp from "./auth/userSignUp.js";
import bodyParser from "body-parser";
import axios from "axios";
import connecDB from "./database/connection.js";
import userLogin from "./auth/userLogin.js";
import refreshToken from "./auth/refreshToken.js";
connecDB();
//Intializing the express app
const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//All the imported routes are used to make them available
app.use(userSignUp);
app.use(userLogin);
app.use(refreshToken);

//opens the server on port 3000 and an callback function
app.listen(3000, () => {
  console.log("Server has started listening on port 3000");
});
axios
  .post("http://127.0.0.1:3000/userLogin", {
    Email: "abhishek",
    Password: "abhishek",
  })
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
