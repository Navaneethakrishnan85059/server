import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig";
import errorHandler from "./middlewares/errorMiddleWare";


const app = express();

const port: number = 8000;

connectDB()

app.use(cors());
app.use(express.json());
app.use(errorHandler)

app.listen(port,() => {
  console.log("port :>> ", port);
});
