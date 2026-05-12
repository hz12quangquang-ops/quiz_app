import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/mysql.js";
import { swaggerDocs } from "./docs/swagger.js";

// Middleware
import errorMiddleware from "./middlewares/errorMiddleware.js";

// Routes
import authRoutes from "./routes/authRoutes.js";

// Admin Routes
import adminExamRoutes from "./routes/admin/adminExamRoutes.js";
import adminQuestionRoutes from "./routes/admin/adminQuestionRoutes.js";
import adminUserRoutes from "./routes/admin/adminUserRoutes.js";
import adminResultRoutes from "./routes/admin/adminResultRoutes.js";

// User Routes
import userExamRoutes from "./routes/user/userExamRoutes.js";
import userResultRoutes from "./routes/user/userResultRoutes.js";
import userProfileRoutes from "./routes/user/userProfileRoutes.js";

dotenv.config();

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static images
app.use("/images", express.static("public/images"));

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Quiz API Server Running...",
  });
});

// Database Test Route
app.get("/api/test-db", async (req, res) => {
  try {
    const connection = await pool.getConnection();

    res.status(200).json({
      success: true,
      message: "MySQL connected successfully",
    });

    connection.release();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Auth
app.use("/api/auth", authRoutes);

// Admin
app.use("/api/admin/exams", adminExamRoutes);
app.use("/api/admin/questions", adminQuestionRoutes);
app.use("/api/admin/users", adminUserRoutes);
app.use("/api/admin/results", adminResultRoutes);

// User
app.use("/api/user/exams", userExamRoutes);
app.use("/api/user/results", userResultRoutes);
app.use("/api/user/profile", userProfileRoutes);

// Swagger
swaggerDocs(app);

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Error Middleware
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
