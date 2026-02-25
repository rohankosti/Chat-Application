import express from "express";
import connectdb from "./config/db.js";
import APIROUTES from "./routes/API/index.js";
import WEBROUTES from "./routes/WEB/index.js";
import cookieParser from "cookie-parser";

const app = express();

// app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//ejs setup
app.set("view engine", "ejs");
app.set("views", "views");

//API routes
app.use(APIROUTES);
//WEB routes
app.use(WEBROUTES);
//MongoDB routes
connectdb();



app.listen(3000, () => {
  console.log(`http://localhost:3000/signup`);
});
