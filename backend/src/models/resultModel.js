import pool from "../config/mysql.js";

// Submit result
export const submitResultModel = async (
  userId,
  examId,
  score,
  totalCorrect,
  totalQuestions,
) => {
  const [result] = await pool.query(
    `
      INSERT INTO results
      (
        user_id,
        exam_id,
        score,
        total_correct,
        total_questions
      )
      VALUES (?, ?, ?, ?, ?)
    `,
    [userId, examId, score, totalCorrect, totalQuestions],
  );

  return result;
};

// Get all results
export const getAllResultsModel = async () => {
  const [rows] = await pool.query(`
    SELECT
      results.*,
      users.name,
      exams.title
    FROM results
    JOIN users
    ON results.user_id = users.id
    JOIN exams
    ON results.exam_id = exams.id
    ORDER BY results.id DESC
  `);

  return rows;
};

// Get my results
export const getMyResultsModel = async (userId) => {
  const [rows] = await pool.query(
    `
      SELECT
        results.*,
        exams.title
      FROM results
      JOIN exams
      ON results.exam_id = exams.id
      WHERE results.user_id = ?
      ORDER BY results.id DESC
    `,
    [userId],
  );

  return rows;
};

export const saveResultModel = async (
  userId,
  examId,
  score,
  totalQuestions,
) => {
  const [result] = await pool.query(
    `
      INSERT INTO results
      (
        user_id,
        exam_id,
        score,
        total_questions
      )
      VALUES (?, ?, ?, ?)
    `,
    [userId, examId, score, totalQuestions],
  );

  return result;
};

export const getUserResultsModel = async (userId) => {
  const [rows] = await pool.query(
    `select * 
    from results 
    where user_id = ? 
    order by created_at desc`,
    [userId],
  );

  return rows;
};
