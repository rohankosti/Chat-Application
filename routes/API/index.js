import express from "express";
import User from "./user.js";
import login from "./authentication.js";
import Message from "./msg.js";

const router = express.Router();

router.use(User)
router.use(login)
router.use(Message)

export default router;