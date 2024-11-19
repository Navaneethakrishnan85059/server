import mongoose from "mongoose";
import type{ RegisterInterface } from "../types/users";


const RegisterSchema=new mongoose.Schema<RegisterInterface>({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    otp:{type:String,required:true},
    profile:{type:String,default:""},
    created_at:{type:Date, default:():Date=>new Date},
    update_at:{type:Date, default:():Date=>new Date},
isValid:{type:Boolean,default:false}
})




const RegisterModels= mongoose.model<RegisterInterface>('userRegister',RegisterSchema)


export default RegisterModels