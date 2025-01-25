import { Router } from "express";
import { userController } from "../controller/userController";


const userRouter=Router()


userRouter.post('/postuser',userController.AddUser);
userRouter.get('/getUserByEmail',userController.GetAllByEmail);
userRouter.put('/userVerified',userController.VerifiedUser);
userRouter.delete('/deleteUser/:id',userController.DeleteUser)


export default userRouter