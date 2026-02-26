# 💬 Real-Time Chat Application

A full-stack real-time chat application built using Node.js, Express, MongoDB, JWT, EJS, and Socket.IO.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🛡 JWT Based Authorization
- 💬 Real-Time Messaging using Socket.IO
- 👤 User Name Display in Chat
- ↔ Left / Right Message UI (Own vs Others)
- 📡 Live Multi-Browser Communication
- 🚪 Logout Functionality
- 🎨 Responsive UI with Tailwind CSS
- 🏗 MVC Architecture

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Socket.IO

### Frontend
- EJS
- Tailwind CSS
- Vanilla JavaScript

---

## 📂 Project Structure (MVC)
CHAT-APPLICATION/
│
├── models/
├── controllers/
├── routes/
├── middlewares/
├── views/
│ ├── partials/
│ ├── Rooms.ejs
│
├── public/
├── server.js
└── package.json

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