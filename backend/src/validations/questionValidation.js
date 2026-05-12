import { body } from "express-validator";

export const createQuestionValidation = [
  body("examId").notEmpty().withMessage("Exam ID is required"),

  body("question").notEmpty().withMessage("Question is required"),

  body("optionA").notEmpty().withMessage("Option A is required"),

  body("optionB").notEmpty().withMessage("Option B is required"),

  body("optionC").notEmpty().withMessage("Option C is required"),

  body("optionD").notEmpty().withMessage("Option D is required"),

  body("correctAnswer").notEmpty().withMessage("Correct answer is required"),
];
