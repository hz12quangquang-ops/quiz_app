import express from "express";

import authMiddleware from "../../middlewares/authMiddleware.js";

import {
  submitResult,
  getMyResults,
  submitExam,
  getUserResults,
} from "../../controllers/user/userResultController.js";

const router = express.Router();

// Submit Result
router.post("/", authMiddleware, submitResult);

// Get My Results
router.get("/my-results", authMiddleware, getMyResults);

router.post("/submit", authMiddleware, submitExam);

router.get("/", authMiddleware, getUserResults);

export default router;
