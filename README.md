# 💬 Real-Time Chat Application

Chat Application — This is my chat application project based on node.js express.js and also use MongoDB to store all chart and make real-time chat application 

# Convoxa - Real-Time Chat Application

![Convoxa](https://img.shields.io/badge/Status-Active-green)
![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green)
![Express](https://img.shields.io/badge/Express.js-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-green)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--time-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

A modern, real-time chat application built with **Node.js, Express.js, MongoDB, and Socket.IO**. Features user authentication via JWT, persistent message storage, and instant messaging capabilities.
---
## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🛡 JWT Based Authorization
- 💬 Real-Time Messaging using Socket.IO
- 👤 User Name Display in Chat
- ↔ Left / Right Message UI (Own vs Others)
- 📡 Live Multi-Browser Communication
- 📧 Email Notifications using Nodemailer
- 🚪 Logout Functionality
- 🎨 Responsive UI with Tailwind CSS
- 🏗 MVC Architecture


## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Socket.IO
- Nodemailer

### Frontend
- EJS
- Tailwind CSS
- Vanilla JavaScript

📧 Email Flow

User performs action (e.g., registration / form submission)
Server triggers Nodemailer
SMTP configuration used
Email sent securely using environment variables

---

## 📂 Project Structure (MVC)

```
CHAT-APPLICATION/
│
├── models/
├── controllers/
├── routes/
├── middlewares/
├── views/
│   ├── partials/
│   ├── Rooms.ejs
│
├── public/
├── server.js
└── package.json
```

---

## 🔐 Authentication Flow

1. User registers
2. Password stored securely
3. JWT token generated
4. Token verified using middleware
5. Protected routes accessed using `req.user`

---

## 💬 Real-Time Chat Flow

1. User logs in
2. Opens chat room
3. Socket connection established
4. User joins room
5. Messages emitted via `socket.emit`
6. Server broadcasts using `io.to(room).emit`
7. Messages rendered left/right based on sender

---

## 📚 What I Learned

- How real-time communication works
- Difference between HTTP and WebSocket
- JWT authentication system
- Room-based chat logic
- MVC backend structuring
- Full-stack project deployment concepts

---

## ⚙ Installation

```bash
git clone <your-repo-link>
cd project
npm install
npm start
