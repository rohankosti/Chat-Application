import express from "express";
import User from "./user.js";
import login from "./authentication.js";

const router = express.Router();

router.use(User)
router.use(login)

export default router;