import type { NextFunction, Request, Response } from "express";
import { User } from "../services/userServices";



export const Registeration=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {


const data=req.body
const Users=new User()
 const result= await Users.saveUserRegisteration(data)
console.log('result :>> ', result);


res.cookie('userinfo',result)

res.status(200).json(result)

    } catch (error) {

        console.error(error);
        res.status(400).json(error)
        next(error)
        
        
    }
}


export const verifyOtp=(req:Request,res:Response,next:NextFunction)=>{
    try {
        
console.log('req.body :>> ', req.body);

    } catch (error) {
        console.error(error);
        res.status(400).json(error)
        next(error)
        
    }

}