import express from "express";
// serve our frontend to create an api with node js
import cors from "cors";
// setup rules to communicate between front end and back end
import mongoose from "mongoose";
// orm for mongodb

import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
// get data in json format from the frontend
app.use(cors());

app.use("/auth", userRouter);
// auth == endpoint route related to the authentications, and these will be in users.js

mongoose.connect(
  "mongodb+srv://srajankumar:zoro123@cluster0.7f1yojf.mongodb.net/Cluster0?retryWrites=true&w=majority"
);
// connect to db

app.listen(3001, () => console.log("Server started and running at 3001"));
