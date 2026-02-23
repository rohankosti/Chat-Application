import express from "express";
import {storeuser,getuser} from "../../controller/user.js";

const router = express.Router();
router.post("/signupdata",storeuser);
router.get("/getuserdata",getuser)


export default router