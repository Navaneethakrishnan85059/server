import { Router } from "express";
import { Registeration } from "../controllers/userController";




const userRouter=Router()

userRouter.post('/saveRegister',Registeration)


export default userRouter