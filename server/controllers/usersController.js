import Users from "../models/Users.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await Users.find().select("-password").exec();
  if (!users?.length) {
    res.status(400).json({ message: "No users found" });
  }
  res.json(users);
});
export const getUserById = asyncHandler(async (req, res) => {
  const userEmail = req.email;
  const user = await Users.findById({ email: userEmail })
    .select("-password")
    .exec();
  if (!user?.length) {
    res.status(400).json({ message: "No users found" });
  }
  res.json(user);
});
export const createNewUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const duplicate = await Users.findOne({ email });
  if (duplicate) {
    return res.status(409).json({ message: "Users existed" });
  }
  const passHashed = await bcrypt.hash(password, 10);
  const user = await Users.create({ email, password: passHashed });
  if (user) {
    return res.status(201).json({ message: "New user created" + email });
  } else {
    return res.status(400).json({ message: "Invalid user data received" });
  }
});
