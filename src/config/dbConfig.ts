import { rejects } from "assert";
import { configDotenv } from "dotenv"
import mongoose from "mongoose";
import { resolve } from "path";

configDotenv()

 export const connectDB=()=>{
    

    const mongoUrl=process.env.mongoDbAtlas_url as string

    console.log('mongoU :>> ', mongoUrl);

    mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("database is connected");
        resolve();
    })
    .catch((err)=>{
        console.log(`error of ${err}`);
        rejects(err)
    })
}