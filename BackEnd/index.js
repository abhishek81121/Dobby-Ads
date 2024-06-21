import express from "express";
import userSignUp from "./auth/userSignUp.js";
import bodyParser from "body-parser";
import axios from "axios";
//Intializing the express app
const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//All the imported routes are used to make them available
app.use(userSignUp);

//opens the server on port 3000 and an callback function
app.listen(3000, () => {
  console.log("Server has started listening on port 3000");
});
