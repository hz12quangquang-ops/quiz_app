import express from "express";
import upload from "../../config/muler.js";

import {
  getProfile,
  uploadAvatar,
  changePassword,
} from "../../controllers/user/userProfileController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";
import userMiddleware from "../../middlewares/userMiddleware.js";

const router = express.Router();

// Get Profile
router.get("/", authMiddleware, getProfile);

router.post(
  "/upload-avatar",
  authMiddleware,
  upload.single("avatar"),
  uploadAvatar,
);

// Change Password (user only)
router.put("/change-password", authMiddleware, userMiddleware, changePassword);

export default router;
