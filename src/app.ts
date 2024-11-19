import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig";
import errorHandler from "./middlewares/errorMiddleWare";
import userRouter from "./routers/userRouter";
import { generateOtp } from "./utils/otp_function";
import cookieParser from "cookie-parser";


const app = express();

const port: number = 8000;

connectDB()

app.use(cors());
app.use(express.json());
app.use(errorHandler)



app.use(cookieParser())


app.use('/api/user',userRouter)
app.listen(port,() => {
  console.log("port :>> ", port);
});
