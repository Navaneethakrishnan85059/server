import { config } from "dotenv"

import app from "./app"


config()
const server=app  
const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log("server is running",PORT);
    
})
