import express from "express";

import {
  createExam,
  getAllExams,
  updateExam,
  deleteExam,
  searchExams,
} from "../../controllers/admin/adminExamController.js";

import authMiddleware from "../../middlewares/authMiddleware.js";
import adminMiddleware from "../../middlewares/adminMiddleware.js";

import { createExamValidation } from "../../validations/examValidation.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createExamValidation,
  createExam,
);

router.get("/", authMiddleware, adminMiddleware, getAllExams);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  createExamValidation,
  updateExam,
);

router.delete("/:id", authMiddleware, adminMiddleware, deleteExam);

router.get("/search", authMiddleware, adminMiddleware, searchExams);

export default router;
