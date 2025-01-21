import type { Request,Response,NextFunction} from "express";
import { userServices } from "../services/userServices/userServices";


export const userController={

  
   async AddUser(req:Request,res:Response,next:NextFunction)  {
    try {
      const {name,email,phone,password}=req.body
        const userClasses=new userServices()
        const users=await userClasses.AddUserDetails(name,email,password,phone)
        console.log("users",users);
        res.json(users)
      
        
    } catch (error) {
      next(error)  
    }
},
async GetAllByEmail(req:Request,res:Response,next:NextFunction){
  try {
    const {email}=req.body;
    const getUserByEmail=new userServices();
    const UserGetByEmail=await getUserByEmail.GetUserByEmail(email)
    res.json(UserGetByEmail)
    
  } catch (error) {
    next(error)
  }
}
}

 