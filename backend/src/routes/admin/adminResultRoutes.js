import express from "express";

import { getAllResults } from "../../controllers/admin/adminResultController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";

import adminMiddleware from "../../middlewares/adminMiddleware.js";

import { getDashboardStats } from "../../controllers/admin/adminResultController.js";

const router = express.Router();

// Get All Results
router.get("/", authMiddleware, adminMiddleware, getAllResults);

// Get Dashboard Stats
router.get("/dashboard", authMiddleware, adminMiddleware, getDashboardStats);

export default router;
