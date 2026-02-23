import User from "./user.js";
import express from "express";

const router = express.Router();

router.use(User)

export default router;