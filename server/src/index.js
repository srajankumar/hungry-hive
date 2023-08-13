import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter)

mongoose.connect("mongodb+srv://tejasnayakc42:TejasNayakB175@recipes.uasxwp6.mongodb.net/Recipe");

app.listen(3000, () => console.log("Server is running at port 3000..."))