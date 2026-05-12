import { body } from "express-validator";

export const createExamValidation = [
  body("title").notEmpty().withMessage("Title is required"),

  body("description").notEmpty().withMessage("Description is required"),

  body("timeLimit")
    .notEmpty()
    .withMessage("Time limit is required")

    .isInt({ min: 1 })
    .withMessage("Time limit must be number"),
];
