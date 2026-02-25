import express from 'express';
import login from '../../controller/authentication.js'

const router = express.Router();

router.post("/logindata",login);

export default router