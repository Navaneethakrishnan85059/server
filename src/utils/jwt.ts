import { config, configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import { RegisterInterface } from "../types/users";

configDotenv()
export const Tokens=async(id:string,email:string):Promise<string>=>{

const token=jwt.sign({userid:id,useremail:email},process.env.jwt_Private_key as string,{algorithm:'HS256'})
return token
}