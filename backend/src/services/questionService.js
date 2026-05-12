import {
  createQuestionModel,
  getQuestionsByExamModel,
  deleteQuestionModel,
  getRandomQuestionsModel,
} from "../models/questionModel.js";

// Create Question
export const createQuestionService = async (
  examId,
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  correctAnswer,
) => {
  const result = await createQuestionModel(
    examId,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    correctAnswer,
  );

  return {
    success: true,
    message: "Question created successfully",
    questionId: result.insertId,
  };
};

// Get Questions By Exam
export const getQuestionsByExamService = async (examId) => {
  const questions = await getQuestionsByExamModel(examId);

  return questions;
};

// Delete Question
export const deleteQuestionService = async (id) => {
  await deleteQuestionModel(id);

  return {
    success: true,
    message: "Question deleted successfully",
  };
};

export const getRandomQuestionsService = async (examId, limit = 10) => {
  return await getRandomQuestionsModel(examId, limit);
};
