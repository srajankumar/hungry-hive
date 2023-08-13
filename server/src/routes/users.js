import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  // check if username is there or no

  res.json(user);
});
// req variable is used to get data from whoeved made the request for the api
// res used to send data to whoever made the api request

router.post("/login");

export { router as userRouter };
