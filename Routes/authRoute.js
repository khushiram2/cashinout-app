import { Router } from "express";
import { isEmailUnique } from "../middleware/authorisation.js";
import { loginController, registerUserController } from "../conrollers/authcontroller.js";

const router=Router()

router.get('/', (_, res) => {
  res.send('GET request to the homepage')
})
router.post("/register",isEmailUnique,registerUserController)
router.post("/login",loginController)

export const authRouter=router