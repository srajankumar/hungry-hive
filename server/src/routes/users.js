import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register",async (req,res)=>{
    const { username, password } =req.body;
    const user = await UserModel.findOne({username})

    if (user) {
        return res.json({message: "User already Exists!"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({username,password: hashedPassword})
    await newUser.save()

    res.json({message:"User registered succesfuly!"});
});

router.post('/login',async (req, res) => {
    const { username, password } = req.body
    res.json({ message: "Login route is under construction." })
});

export {router as userRouter };