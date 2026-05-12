import { getAllResultsService } from "../../services/resultService.js";

import pool from "../../config/mysql.js";

// Get All Results
export const getAllResults = async (req, res, next) => {
  try {
    const results = await getAllResultsService();

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    next(error);
  }
};

export const getDashboardStats = async (req, res, next) => {
  try {
    const [[users]] = await pool.query("SELECT COUNT(*) AS total FROM users");

    const [[exams]] = await pool.query("SELECT COUNT(*) AS total FROM exams");

    const [[results]] = await pool.query(
      "SELECT COUNT(*) AS total FROM results",
    );

    const [[avgScore]] = await pool.query(
      "SELECT AVG(score) AS average FROM results",
    );

    res.status(200).json({
      success: true,
      data: {
        totalUsers: users.total,
        totalExams: exams.total,
        totalResults: results.total,
        averageScore: Number(avgScore.average || 0).toFixed(2),
      },
    });
  } catch (error) {
    next(error);
  }
};
