import type { Request, Response, NextFunction } from "express";
import { userServices } from "../services/userServices/userServices";
import { assign } from "nodemailer/lib/shared";


export const userController = {


  async AddUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, phone, password } = req.body
      const userClasses = new userServices()
      const users = await userClasses.AddUserDetails(username, email, password, phone)
      console.log("users", users);
      res.json(users)


    } catch (error) {
      next(error)
    }
  },
  async GetAllByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const getUserByEmail = new userServices();
      const UserGetByEmail = await getUserByEmail.GetUserByEmail(email)
      res.json(UserGetByEmail)

    } catch (error) {
      next(error)
    }
  },
  async VerifiedUser(req:Request,res:Response,next:NextFunction){
  try {
    const{email,otp}=req.body;
    const verifiedUser=new userServices();
    const UserVerified=await verifiedUser.UserVerified(email,otp);
    console.log("UserVerified",UserVerified);
    
    res.json(UserVerified)
    } 
    catch (error) {
  next(error)
  
   }
  }
  ,
  async DeleteUser(req:Request,res:Response,next:NextFunction){

      try {
        const{id}=req.params
        const UserDelete=new userServices()
        const deleteUser=await UserDelete.DeleteUser(id)
        res.json(deleteUser)
      } catch (error) {
        next(error)
      }

  },
  async CheckUser(req:Request,res:Response,next:NextFunction){
try {
  const{email,password}=req.body;
  const UserServices=new userServices();
  const CheckUser=await UserServices.CheckUserByEmailPassword(email,password);
  console.log(CheckUser);
  
  res.json({CheckUser})
} catch (error) {
  console.error(error);
  next(error)
  
}
  }
}

