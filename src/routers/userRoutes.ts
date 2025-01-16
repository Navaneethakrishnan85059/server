import { Router } from "express";
import { userController } from "../controller/userController";


const userRouter=Router()


userRouter.post('/postuser',userController.AddUser);


export default userRouter