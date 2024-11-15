import mongoose from "mongoose";
import { RegisterInterface } from "../types/users";


const RegisterSchema=new mongoose.Schema<RegisterInterface>({
    username:{type:String,required:true},
    email:{type:String,required:true},
    otp:{type:String,required:true},
    password:{type:String,required:true},
    created_at:{type:Date, default:():Date=>new Date},
    update_at:{type:Date, default:():Date=>new Date}

})




const RegisterModels= mongoose.models||mongoose.model('userRegister',RegisterSchema)


export default RegisterModels