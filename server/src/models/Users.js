import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// usermodel will be generated based on schema, user collection will be created
export const UserModel = mongoose.model("users", UserSchema);
