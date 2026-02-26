import express from "express";
import connectdb from "./config/db.js";
import APIROUTES from "./routes/API/index.js";
import WEBROUTES from "./routes/WEB/index.js";
import cookieParser from "cookie-parser";
import Message from "./model/message.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

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

io.on("connection", (socket) => {
  socket.on("chatMessage", async (data) => {
    // DB save
    const newMessage = new Message({
    
      username: data.username,
      text: data.message,
    });

    await newMessage.save();

    // Emit sabko
    io.emit("message", {
      username: data.username,
      message: data.message,
    });
  });
});

server.listen(3000, () => {
  console.log(`http://localhost:3000/Login`);
});
