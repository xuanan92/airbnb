import Users from "../models/Users.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await Users.find().exec();
  if (!users?.length) {
    res.status(400).json({ message: "No users found" });
  }
  return res.status(200).json(users);
});
export const createNewUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const duplicate = await Users.findOne({ email }).lean().exec();
  if (duplicate) {
    return res.status(400).json({ message: "Users existed" });
  }
  const passHashed = bcrypt.hash(password, 10);
  const user = await Users.create({ email, password: passHashed });
  if (user) {
    return res.status(201).json({ message: "New user created" + email });
  } else {
    return res.status(400).json({ message: "Invalid user data received" });
  }
});
