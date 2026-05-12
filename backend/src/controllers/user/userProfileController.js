import {
  getProfileService,
  changePasswordService,
} from "../../services/userService.js";

// Get Profile
export const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await getProfileService(userId);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadAvatar = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      imageUrl: `/images/${req.file.filename}`,
    });
  } catch (error) {
    next(error);
  }
};

// Change Password
export const changePassword = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { oldPassword, newPassword } = req.body;

    const result = await changePasswordService(
      userId,
      oldPassword,
      newPassword,
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
