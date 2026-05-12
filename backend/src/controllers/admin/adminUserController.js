import {
  getAllUsersService,
  deleteUserService,
} from "../../services/userService.js";

// Get All Users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// Delete User
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteUserService(id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
