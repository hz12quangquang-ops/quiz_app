import express from "express";

import {
  getExamTimer,
  getUserExams,
} from "../../controllers/user/userExamController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Get Exams
router.get("/", authMiddleware, getUserExams);

router.get("/timer/:id", authMiddleware, getExamTimer);

router.get("/:id/random", authMiddleware, getExamTimer);

export default router;
