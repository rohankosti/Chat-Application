import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("join", (username) => {
    socket.username = username;
    io.emit("message", `${username} joined the chat`); // kai bhi likh skte hai
  });

  socket.on("chat message", (msg) => {
    io.emit("message", `${socket.username}: ${msg}`);
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      io.emit("message", `${socket.username} left the chat`);
    }
    console.log("User Disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
//socket.emit send particlular one  person 
//io.emit send all person 
// io.on only listen event =a wait kre 