import { validationResult } from "express-validator";

import { registerService, loginService } from "../../services/authService.js";

// Register
export const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, password } = req.body;

    const result = await registerService(name, email, password);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Login
export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    const result = await loginService(email, password);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
