import { config } from "dotenv"
import express from "express"

config()
const server=express()
const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log("server is running",PORT);
    
})
