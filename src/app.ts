import express, {type Application } from "express"

import errorHandler from "./middleware/ErrorHandlerMiddleware"
import cors from "cors"


const app:Application=express()

app.use(cors())
app.use(express.json())

app.use(errorHandler)
export default app