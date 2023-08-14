import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import {userRouter} from "./routes/users.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)

mongoose.connect("mongodb+srv://tejasnayakc42:TejasNayakB175@hive.egstpqe.mongodb.net/Hive?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(3001,()=> console.log("Server Running at 3001"))