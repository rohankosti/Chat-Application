# Chat-Application
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

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Socket.IO Events](#socketio-events)
- [Database Schema](#database-schema)
- [Authentication Flow](#authentication-flow)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🔐 Authentication & Security
- User registration with email validation
- Secure login with JWT (JSON Web Tokens)
- HTTP-only cookies for token storage
- Protected routes with middleware
- Password authentication
- Auto email notifications on signup

### 💬 Real-Time Messaging
- Instant message delivery using Socket.IO
- Real-time user status updates
- Message history persistence
- Auto-loading of previous messages
- Multi-user support in chat rooms
- Automatic message timestamps

### 👤 User Management
- User profiles with account details
- User dashboard with stats
- Logout functionality with session cleanup
- User authentication state management

### 🎨 User Interface
- Modern, responsive design with Tailwind CSS
- Dark theme for comfortable viewing
- Mobile-friendly layout
- Real-time message display with color coding
- User avatars with initials
- Smooth animations and transitions

### 📊 Database Features
- MongoDB for persistent storage
- Mongoose ODM for data modeling
- Automatic timestamps
- Indexed queries for performance

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | JavaScript runtime | 18+ |
| **Express.js** | Web framework | 4.x |
| **MongoDB** | NoSQL database | Latest |
| **Mongoose** | ODM for MongoDB | 7.x+ |
| **Socket.IO** | Real-time communication | 4.x+ |
| **JWT** | Authentication tokens | Latest |
| **Cookie-Parser** | Cookie middleware | Latest |
| **Nodemailer** | Email service | Latest |
| **dotenv** | Environment variables | Latest |

### Frontend
| Technology | Purpose |
|-----------|---------|
| **EJS** | Template engine |
| **HTML5** | Markup |
| **Tailwind CSS** | Styling |
| **Vanilla JavaScript** | Interactivity |
| **Socket.IO Client** | WebSocket communication |
| **LocalStorage** | Client-side data storage |

---

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **VS Code** or any code editor
- **Postman** (optional) - For API testing

---

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/Chat-Application.git
cd Chat-Application
```

### Step 2: Install Dependencies
```bash
npm install
```

**This will install:**
```json
{
  "express": "^4.x",
  "mongoose": "^7.x",
  "socket.io": "^4.x",
  "jsonwebtoken": "^9.x",
  "cookie-parser": "^1.x",
  "nodemailer": "^6.x",
  "dotenv": "^16.x",
  "ejs": "^3.x"
}
```

### Step 3: Create .env File
Create a `.env` file in the root directory:

```env
# MongoDB Connection
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/chat-app

# JWT Secret Key (use a strong random string)
JWT_SECRATE=your_super_secret_key_123456789

# Email Configuration (Gmail example)
EMAILUSER=your_email@gmail.com
EMAILPASS=your_app_specific_password

# Server Port (optional)
PORT=3000
```

**⚠️ Important:** Never commit `.env` file to version control!

### Step 4: Add to .gitignore
```gitignore
node_modules/
.env
.env.local
.DS_Store
*.log
```

### Step 5: Start the Application
```bash
npm start
```

**Output:**
```
http://localhost:3000/Login
Chat App Connected Successfully
```

Visit `http://localhost:3000/Login` in your browser.

---

## ⚙️ Configuration

### MongoDB Connection Setup

#### Option 1: MongoDB Atlas (Recommended)
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster
4. Get connection string
5. Add to `.env`:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/chat-app?retryWrites=true&w=majority
```

#### Option 2: Local MongoDB
1. Install MongoDB Community
2. Start MongoDB service
3. Use local connection:
```env
MONGO_URL=mongodb://localhost:27017/chat-app
```

### Email Configuration (Gmail)

1. Enable 2-factor authentication on Gmail
2. Generate [App Password](https://myaccount.google.com/apppasswords)
3. Add credentials to `.env`:
```env
EMAILUSER=your_email@gmail.com
EMAILPASS=abcd efgh ijkl mnop  # 16-character app password
```

### JWT Secret Generation

Generate a strong secret key:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy output to `.env`:
```env
JWT_SECRATE=your_generated_secret_here
```

---

## 📁 Project Structure

```
Chat-Application/
│
├── 📄 server.js                 # Main application entry point
├── 📄 package.json              # Project dependencies
├── 📄 .env                      # Environment variables
├── 📄 .gitignore                # Git ignore rules
├── 📄 README.md                 # This file
│
├── 📁 config/
│   └── db.js                    # MongoDB connection
│
├── 📁 model/
│   ├── user.js                  # User schema (name, email, password)
│   └── message.js               # Message schema (username, text, timestamp)
│
├── 📁 controller/
│   ├── authentication.js        # Login logic
│   ├── user.js                  # User creation & retrieval
│   └── messages.js              # Message fetching
│
├── 📁 middleware/
│   └── authoraiztion.js         # JWT verification middleware
│
├── 📁 routes/
│   ├── API/
│   │   ├── index.js             # API route aggregator
│   │   ├── authentication.js    # Login route
│   │   ├── user.js              # Signup & user data routes
│   │   └── msg.js               # Message fetching route
│   └── WEB/
│       └── index.js             # Page rendering routes
│
├── 📁 views/
│   ├── Dashboard.ejs            # User dashboard
│   ├── Login.ejs                # Login page
│   ├── Signup.ejs               # Registration page
│   ├── Rooms.ejs                # Chat room
│   ├── Profile.ejs              # User profile
│   ├── Error.ejs                # Error page
│   └── partials/
│       ├── header.ejs           # Header component
│       └── footer.ejs           # Footer component
│
└── 📁 public/
    ├── style.css                # Custom styles
    ├── app.js                   # Socket.IO app reference
    └── index.html               # Static HTML demo
```

---

## 🎯 How It Works

### User Registration Flow
```
1. User fills Signup form
2. Frontend validates input
3. POST request to /signupdata
4. Backend saves user to MongoDB
5. Welcome email sent
6. User redirected to Login
```

### User Login Flow
```
1. User fills Login form
2. Backend verifies credentials
3. JWT token generated
4. Token stored in HTTP-only cookie
5. User redirected to Dashboard
6. User object stored in localStorage
```

### Real-Time Chat Flow
```
1. User enters chat room
2. Socket.IO connection established
3. User joins with username
4. Old messages loaded from MongoDB
5. User sends message via Socket.IO
6. Message saved to database
7. Message broadcast to all connected clients
8. All users receive and display message
```

### Message Display Logic
```
Own Messages:
├── Positioned on RIGHT side
├── Green background color
└── Shows only message text

Other Users' Messages:
├── Positioned on LEFT side
├── Gray background color
└── Shows "username: message"
```

---

## 🔌 API Endpoints

### Authentication Endpoints

#### Register New User
```http
POST /signupdata
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123",
  "confirmPassword": "Password123"
}
```

**Response:**
```json
{
  "msg": "Save Successfully",
  "User": {
    "_id": "...ObjectId...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```http
POST /logindata
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Password123"
}
```

**Response:**
```json
{
  "msg": "Login Successfully",
  "User": {
    "_id": "...ObjectId...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Header Set:**
```
Set-Cookie: token=eyJhbGc... ; HttpOnly; Max-Age=86400
```

---

### User Endpoints

#### Get User Data
```http
GET /getuserdata
Cookie: token=eyJhbGc...
```

**Response:**
```json
{
  "_id": "...ObjectId...",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### Message Endpoints

#### Get All Messages
```http
GET /roomchat
```

**Response:**
```json
[
  {
    "_id": "...ObjectId...",
    "username": "John Doe",
    "text": "Hello everyone!",
    "createdAt": "2026-02-26T10:30:00Z",
    "updatedAt": "2026-02-26T10:30:00Z"
  },
  {
    "_id": "...ObjectId...",
    "username": "Jane Smith",
    "text": "Hi John!",
    "createdAt": "2026-02-26T10:31:00Z",
    "updatedAt": "2026-02-26T10:31:00Z"
  }
]
```

---

### Web Routes

| Route | Method | Purpose | Auth Required |
|-------|--------|---------|---------------|
| `/Login` | GET | Login page | No |
| `/Signup` | GET | Signup page | No |
| `/Dashboard` | GET | Dashboard | Yes |
| `/Rooms` | GET | Chat room | Yes |
| `/Profile` | GET | User profile | Yes |
| `/Logout` | GET | Logout | No |
| `/Error` | GET | Error page | No |

---

## 💬 Socket.IO Events

### Client to Server Events

#### Join Room
```javascript
socket.emit("join", username);
```

**Purpose:** Notify server when user enters chat room

**Example:**
```javascript
socket.emit("join", "John Doe");
```

#### Send Chat Message
```javascript
socket.emit("chatMessage", message);
```

**Purpose:** Send user message to server

**Example:**
```javascript
socket.emit("chatMessage", "Hello everyone!");
```

---

### Server to Client Events

#### Receive Message
```javascript
socket.on("message", (data) => {
  // data = { username: "John", message: "Hello!" }
});
```

#### User Joined (Optional)
```javascript
socket.on("userJoined", (username) => {
  // Handle user join
});
```

---

## 📊 Database Schema

### User Schema

**File:** `model/user.js`

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (required),
  createdAt: Date (default: now),
  updatedAt: Date (default: now)
}
```

**Example:**
```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "createdAt": "2026-02-26T10:00:00Z",
  "updatedAt": "2026-02-26T10:00:00Z"
}
```

### Message Schema

**File:** `model/message.js`

```javascript
{
  _id: ObjectId,
  username: String (required),
  text: String (required),
  createdAt: Date (default: now),
  updatedAt: Date (default: now)
}
```

**Example:**
```json
{
  "_id": ObjectId("507f1f77bcf86cd799439012"),
  "username": "John Doe",
  "text": "Hello everyone!",
  "createdAt": "2026-02-26T10:30:00Z",
  "updatedAt": "2026-02-26T10:30:00Z"
}
```

---

## 🔐 Authentication Flow

### JWT Token Creation

**When:** User logs in successfully

**Process:**
```javascript
jwt.sign(
  {
    id: User._id,
    email: User.email,
    name: User.name
  },
  process.env.JWT_SECRATE,
  { expiresIn: "1d" }
)
```

**Token Payload:**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "email": "john@example.com",
  "name": "John Doe",
  "iat": 1708950000,
  "exp": 1709036400
}
```

### JWT Token Verification

**When:** User accesses protected route

**Process:**
1. Extract token from cookie: `req.cookies.token`
2. Verify token signature with secret
3. Check token expiration
4. Attach decoded payload to `req.user`
5. Allow route access if valid

**Middleware Flow:**
```
Request → Extract Cookie → JWT.verify() → Decode Payload → Attach to req.user → Next Handler
```

### Protected Routes

```javascript
app.get("/Dashboard", authorization, (req, res) => {
  // req.user available here
  // req.user = { id, email, name }
  res.render("Dashboard", { user: req.user });
});
```

---

## 🎮 Usage

### First Time Usage

#### 1. Create Account
- Go to `http://localhost:3000/Signup`
- Fill in your details
- Check email for welcome message
- Click "Already have account?" to login

#### 2. Login
- Go to `http://localhost:3000/Login`
- Enter email and password
- Click "Sign in"
- Redirected to Dashboard

#### 3. Access Dashboard
- View your profile information
- See recent activity
- Navigate to chat rooms

#### 4. Start Chatting
- Click "Rooms" in navigation
- Chat room page loads
- Previous messages displayed
- Type message and press Enter
- Message appears in real-time
- See others' messages instantly

#### 5. Profile Management
- Click your avatar/Profile
- View account details
- Update information (future feature)

#### 6. Logout
- Click "Logout" button
- Session cleared
- Redirected to login page

---

## 📱 Features in Detail

### Real-Time Messaging
- Messages delivered instantly via Socket.IO
- No page refresh required
- WebSocket technology for low latency
- Automatic scrolling to latest messages

### Message History
- All messages stored in MongoDB
- Previous messages loaded on page load
- Persistent storage across sessions
- Timestamped messages

### User Authentication
- Secure registration with email
- JWT-based authentication
- Session timeout after 24 hours
- HTTP-only cookies prevent XSS

### Responsive Design
- Works on desktop, tablet, mobile
- Tailwind CSS for styling
- Dark theme for comfortable viewing
- Touch-friendly buttons and inputs

---

## 🐛 Troubleshooting

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Check MongoDB is running locally or Atlas is accessible
- Verify MONGO_URL in .env file
- Check internet connection for Atlas
- Verify IP whitelist in MongoDB Atlas

### Issue: "JWT is not defined"
**Solution:**
- Ensure jsonwebtoken is installed: `npm install jsonwebtoken`
- Check import statement in controller file

### Issue: "Socket.IO connection refused"
**Solution:**
- Server must be running: `npm start`
- Check no firewall blocking port 3000
- Clear browser cache and reload

### Issue: "Email not sending"
**Solution:**
- Enable 2FA on Gmail
- Generate App-specific password
- Update EMAILPASS in .env
- Check "Less secure apps" is disabled

### Issue: "Page shows 404 error"
**Solution:**
- Check route exists in `routes/WEB/index.js`
- Verify middleware is applied correctly
- Check JWT token is still valid

### Issue: "Messages not persisting"
**Solution:**
- Verify MongoDB connection
- Check Message schema in `model/message.js`
- Ensure message save is awaited

### Issue: "Can't see old messages"
**Solution:**
- Check `/roomchat` endpoint returns data
- Verify messages exist in database
- Check browser console for JavaScript errors

---

## 🚀 Deployment

### Deploy to Heroku

```bash
# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set MONGO_URL=your_mongodb_url
heroku config:set JWT_SECRATE=your_secret_key
heroku config:set EMAILUSER=your_email
heroku config:set EMAILPASS=your_app_password

# Deploy
git push heroku main

# Open app
heroku open
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Deploy to Railway

```bash
# Visit railway.app
# Connect GitHub repository
# Add environment variables
# Deploy automatically
```

---

## 📈 Performance Optimization

### Current Implementation
- ✅ MongoDB indexing for fast queries
- ✅ Socket.IO for real-time updates
- ✅ JWT for stateless authentication
- ✅ HTTP-only cookies secure

### Future Improvements
- 🔄 Message pagination (load messages in chunks)
- 🔄 Redis caching for frequently accessed data
- 🔄 Compression middleware for responses
- 🔄 CDN for static assets
- 🔄 Database indexing optimization
- 🔄 Connection pooling

---

## 🔒 Security Best Practices

### Implemented
- ✅ JWT token authentication
- ✅ HTTP-only cookies (prevents XSS)
- ✅ Protected routes with middleware
- ✅ Password authentication
- ✅ Email verification on signup
- ✅ CORS configured

### Recommended for Production
- 🔄 Hash passwords with bcrypt
- 🔄 HTTPS only (no HTTP)
- 🔄 Input validation & sanitization
- 🔄 Rate limiting on API calls
- 🔄 CSRF token protection
- 🔄 Message encryption
- 🔄 Database access control
- 🔄 Environment variable encryption

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** changes: `git commit -m 'Add AmazingFeature'`
4. **Push** to branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

### Code Guidelines
- Follow existing code style
- Add comments for complex logic
- Write meaningful commit messages
- Test your changes before pushing
- Update README if adding features

---

## 📝 Future Enhancements

- [ ] Private messaging between users
- [ ] Message editing and deletion
- [ ] User mentions with @username
- [ ] Image/file sharing
- [ ] Typing indicators
- [ ] User online status
- [ ] Message reactions/emojis
- [ ] Room creation and management
- [ ] Admin moderation tools
- [ ] Message search functionality
- [ ] User profile customization
- [ ] Two-factor authentication
- [ ] Dark/Light theme toggle
- [ ] Message encryption
- [ ] Voice/Video calling

---

## 📞 Support & Help

### Get Help
- Check [Troubleshooting](#troubleshooting) section
- Review [GitHub Issues](https://github.com/yourusername/Chat-Application/issues)
- Check [Socket.IO Documentation](https://socket.io/)
- Review [MongoDB Documentation](https://docs.mongodb.com/)
- Check [Express.js Documentation](https://expressjs.com/)

### Report Issues
Create a detailed issue including:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Error messages/screenshots
- System information

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## 👨‍💻 Author

**Your Name/Team**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

### Libraries & Frameworks
- [Express.js](https://expressjs.com/) - Web framework
- [Socket.IO](https://socket.io/) - Real-time communication
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [EJS](https://ejs.co/) - Template engine

### Resources
- [Node.js Documentation](https://nodejs.org/docs/)
- [MongoDB University](https://university.mongodb.com/)
- [Socket.IO Tutorial](https://socket.io/get-started/)
- [JWT Best Practices](https://jwt.io/)

---

## 📊 Statistics

- **Lines of Code:** ~2000+
- **Files:** 20+
- **Dependencies:** 10+
- **Database Collections:** 2
- **API Endpoints:** 5+
- **Socket.IO Events:** 2+
- **EJS Templates:** 6+
- **Development Time:** Ongoing

---

## 🎯 Roadmap

### V1.0 (Current)
- ✅ User authentication
- ✅ Real-time messaging
- ✅ Message persistence
- ✅ User dashboard
- ✅ Profile management

### V1.1 (Planned)
- 🔄 Typing indicators
- 🔄 User online status
- 🔄 Message reactions
- 🔄 User search

### V2.0 (Future)
- 🔄 Private messaging
- 🔄 Message encryption
- 🔄 Voice/Video calls
- 🔄 File sharing
- 🔄 Group chat management

---

## 💡 Tips & Tricks

### Development
```bash
# Start server with auto-reload
npm install -g nodemon
nodemon server.js

# Test API endpoints
# Use Postman desktop app
# Import endpoints from routes

# Debug Socket.IO
# Check browser console for errors
# Server console shows connection events
```

### Performance
- Clear browser cache if seeing old data
- Check MongoDB indexes with `db.collection.getIndexes()`
- Monitor Socket.IO connections with io.engine.clientsCount
- Use browser DevTools Network tab to monitor

### Security
- Rotate JWT secret periodically
- Update Node.js and dependencies regularly
- Use HTTPS in production
- Enable HSTS header
- Implement rate limiting

---

## 📞 Quick Links

| Link | Purpose |
|------|---------|
| [GitHub Repo](https://github.com/yourusername/Chat-Application) | Source code |
| [Issues](https://github.com/yourusername/Chat-Application/issues) | Bug reports |
| [Discussions](https://github.com/yourusername/Chat-Application/discussions) | Questions |
| [Live Demo](https://chat-app-demo.herokuapp.com) | Working app |
| [Documentation](./PROJECT_DOCUMENTATION.md) | Full docs |

---

## 🎉 Getting Started Quick Reference

```bash
# 1. Clone repo
git clone <repo-url>
cd Chat-Application

# 2. Install dependencies
npm install

# 3. Setup .env file
cp .env.example .env
# Edit .env with your credentials

# 4. Start application
npm start

# 5. Open browser
# Visit http://localhost:3000/Login
```

---

**Made with ❤️ by [Your Name/Team]**

**Last Updated:** February 2026
**Version:** 1.0.0
**Status:** Active Development

---

## Version History

### V1.0.0 - Initial Release
- User authentication with JWT
- Real-time chat with Socket.IO
- MongoDB persistence
- EJS templates
- Tailwind CSS styling
- Email notifications

### Coming Soon...
- [ ] V1.1 - Typing indicators
- [ ] V1.2 - Message reactions
- [ ] V2.0 - Voice/Video calls

---

**Thank you for using Convoxa! Happy chatting! 🎉**