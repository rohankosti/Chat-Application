import express from "express";
import {storeuser,getuser} from "../../controller/user.js";
import authoraization from "../../middleware/authoraiztion.js";

const router = express.Router();
router.post("/signupdata",storeuser);
router.get("/getuserdata",authoraization,getuser)


export default router