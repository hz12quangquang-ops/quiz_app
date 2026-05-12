import pool from "../config/mysql.js";

// Create exam
export const createExamModel = async (
  title,
  description,
  timeLimit,
  createdBy,
) => {
  const [result] = await pool.query(
    `
    INSERT INTO exams
    (
      title,
      description,
      time_limit,
      created_by
    )
    VALUES (?, ?, ?, ?)
    `,
    [title, description, timeLimit, createdBy],
  );

  return result;
};

// Get all exams (pagination)
export const getAllExamsModel = async (limit, offset) => {
  const [rows] = await pool.query(
    `
        SELECT
          exams.*,
          users.name AS creator_name
        FROM exams
        LEFT JOIN users
          ON exams.created_by = users.id
        ORDER BY exams.id DESC
        LIMIT ? OFFSET ?
        `,
    [limit, offset],
  );

  return rows;
};

// Search exams
export const searchExamsModel = async (keyword) => {
  const [rows] = await pool.query(
    `
        SELECT *
        FROM exams
        WHERE title LIKE ?
        ORDER BY id DESC
        `,
    [`%${keyword}%`],
  );

  return rows;
};

// Get exam by id
export const getExamByIdModel = async (id) => {
  const [rows] = await pool.query(
    `
        SELECT *
        FROM exams
        WHERE id = ?
        `,
    [id],
  );

  return rows[0];
};

// Update exam
export const updateExamModel = async (id, title, description, timeLimit) => {
  const [result] = await pool.query(
    `
        UPDATE exams
        SET
          title = ?,
          description = ?,
          time_limit = ?
        WHERE id = ?
        `,
    [title, description, timeLimit, id],
  );

  return result;
};

// Delete exam
export const deleteExamModel = async (id) => {
  const [result] = await pool.query(
    `
        DELETE FROM exams
        WHERE id = ?
        `,
    [id],
  );

  return result;
};

// Exam timer
export const getExamTimerModel = async (id) => {
  const [rows] = await pool.query(
    `
        SELECT id, title, time_limit
        FROM exams
        WHERE id = ?
        `,
    [id],
  );

  return rows[0];
};
