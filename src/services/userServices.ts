

import RegisterModels from "../models/userModels";
import type { RegisterInterface } from "../types/users";
import  { mailFunction } from "../utils/gmail_function";

import { generateOtp } from "../utils/otp_function";
import type { Request } from "express-serve-static-core";
import type { Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import Cookies from "cookies";
import { passwordSecurity } from "../utils/bcrypt";

config()



export class User {




  saveUserRegisteration = async (
    data: RegisterInterface
  ): Promise<string|{id:string,
  email:string,tokens:string}|undefined> => {
    try {
      const existmail = await RegisterModels.findOne({ email: data.email });
      if (existmail) {
        return "mail is already exist";
      } 
        const OTP = await generateOtp();
        const sendMail = await mailFunction(data.email, OTP);
        const security=new passwordSecurity();
        const encryption= await security.encryption(data.password)
        console.log('encryption :>> ', encryption);
        const Register = new RegisterModels({
          username: data.username,
          email: data.email,
          password: encryption,
          otp: OTP,
        });

        const register= await Register.save();

const token=jwt.sign({user:register},process.env.jwt_Private_key as string,{algorithm:'HS256'})



        return {id:register._id.toString(),email:register.email , tokens:token};
      
    } catch (error) {
      console.error(error);
    }
  };
  
}
