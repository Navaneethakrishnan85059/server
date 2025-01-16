import express, {type Application } from "express"

import errorHandler from "./middleware/ErrorHandlerMiddleware"
import cors from "cors"
import userRouter from "./routers/userRoutes"
import { config } from "dotenv"
config()

const app:Application=express();
const apiMiddleware=process.env.apimiddleware


console.log(`${apiMiddleware}/userRoutes`);

app.use(cors());
app.use(express.json());

app.use(`${apiMiddleware}/userRoutes`,userRouter)
app.use(errorHandler)

export default app