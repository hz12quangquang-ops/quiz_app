import express from "express";

import {
  createQuestion,
  getQuestionsByExam,
  deleteQuestion,
  getRandomQuestions,
} from "../../controllers/admin/adminQuestionController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";

import adminMiddleware from "../../middlewares/adminMiddleware.js";

const router = express.Router();

// Create Question
router.post("/", authMiddleware, adminMiddleware, createQuestion);

// Get Questions By Exam
router.get(
  "/exam/:examId",
  authMiddleware,
  adminMiddleware,
  getQuestionsByExam,
);

// Get Random Questions
router.get("/random/:examId", authMiddleware, getRandomQuestions);

// Delete Question
router.delete("/:id", authMiddleware, adminMiddleware, deleteQuestion);

export default router;
