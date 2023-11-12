import express, { json } from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import { DBconnection } from "./database/connection.js";
import { authRouter } from "./Routes/authRoute.js";
import cookieParser from "cookie-parser";
dotenv.config()

await DBconnection()
const app = express()

const corsOrigin={
    origin:"*",
    Credential:true
}
app.use(json())
app.use(cors(corsOrigin))
app.use(cookieParser())

app.use("/auth",authRouter)

app.get("/",(_,res)=>res.send("working fine"))

app.listen(process.env.PORT,()=>console.log("app started on"+process.env.PORT))

