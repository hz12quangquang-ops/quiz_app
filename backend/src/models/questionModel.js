import pool from "../config/mysql.js";

// Create question
export const createQuestionModel = async (
  examId,
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  correctAnswer,
) => {
  const [result] = await pool.query(
    `
      INSERT INTO questions
      (
        exam_id,
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        correct_answer
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [examId, question, optionA, optionB, optionC, optionD, correctAnswer],
  );

  return result;
};

// Get questions by exam
export const getQuestionsByExamModel = async (examId) => {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM questions
      WHERE exam_id = ?
      ORDER BY RAND()
    `,
    [examId],
  );

  return rows;
};

// Delete question
export const deleteQuestionModel = async (id) => {
  const [result] = await pool.query(
    `
      DELETE FROM questions
      WHERE id = ?
    `,
    [id],
  );

  return result;
};

export const getRandomQuestionsModel = async (examId, limit = 10) => {
  const [rows] = await pool.query(
    `
    select *
    from questions
    where exam_id = ?
    order by rand()
    limit ?
    `,
    [examId, parseInt(limit)],
  );

  return rows;
};
