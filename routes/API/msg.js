import express from "express";
import msg from "../../controller/messages.js";
const router = express.Router();

router.get("/roomchat", msg);

export default router;
