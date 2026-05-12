import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { getUserByEmailModel, createUserModel } from "../models/authModel.js";

// Register Service
export const registerService = async (name, email, password) => {
  // Check email exists
  const existingUser = await getUserByEmailModel(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  await createUserModel(name, email, hashedPassword);

  return {
    success: true,
    message: "Register successfully",
  };
};

// Login Service
export const loginService = async (email, password) => {
  // Find user
  const user = await getUserByEmailModel(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Generate token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  return {
    success: true,
    message: "Login successfully",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};
