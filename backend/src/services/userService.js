import bcrypt from "bcryptjs";

import {
  getAllUsersModel,
  getUserByIdModel,
  deleteUserModel,
  updatePasswordModel,
} from "../models/userModel.js";

// Get All Users
export const getAllUsersService = async () => {
  const users = await getAllUsersModel();

  return users;
};

// Get Profile
export const getProfileService = async (id) => {
  const user = await getUserByIdModel(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// Delete User
export const deleteUserService = async (id) => {
  await deleteUserModel(id);

  return {
    success: true,
    message: "User deleted successfully",
  };
};

// Change Password
export const changePasswordService = async (
  userId,
  oldPassword,
  newPassword,
) => {
  const user = await getUserByIdModel(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isMatch) {
    throw new Error("Old password incorrect");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await updatePasswordModel(userId, hashedPassword);

  return {
    success: true,
    message: "Password changed successfully",
  };
};
