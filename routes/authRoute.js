import express from "express";
import { registerController, loginController } from "../controllers/authController.js";

//router object
const router = express.Router();


//routing
//Register : Method post
router.post('/register', registerController);


export default router;

//Login : Method post
router.post('/login', loginController);