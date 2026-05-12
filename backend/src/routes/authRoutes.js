import express from "express";

import { register, login } from "../controllers/auth/authController.js";

import {
  registerValidation,
  loginValidation,
} from "../validations/authValidation.js";

const router = express.Router();

router.post("/register", registerValidation, register);

router.post("/login", loginValidation, login);

export default router;
