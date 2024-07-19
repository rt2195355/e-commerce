import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();


//routing
//Register : Method post
router.post('/register', registerController);


export default router;

//Login : Method post
router.post('/login', loginController);


//test route
router.get('/test', requireSignIn, isAdmin, testController);