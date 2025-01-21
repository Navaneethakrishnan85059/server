import { Router } from "express";
import { userController } from "../controller/userController";


const userRouter=Router()


userRouter.post('/postuser',userController.AddUser);
userRouter.get('/getUserByEmail',userController.GetAllByEmail)


export default userRouter