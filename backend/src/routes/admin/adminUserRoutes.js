import express from "express";

import {
  getAllUsers,
  deleteUser,
} from "../../controllers/admin/adminUserController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";

import adminMiddleware from "../../middlewares/adminMiddleware.js";

const router = express.Router();

// Get All Users
router.get("/", authMiddleware, adminMiddleware, getAllUsers);

// Delete User
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser);

export default router;
