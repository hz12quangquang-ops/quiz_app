import {
  submitResultModel,
  getAllResultsModel,
  getMyResultsModel,
  saveResultModel,
  getUserResultsModel,
} from "../models/resultModel.js";

// Submit Result
export const submitResultService = async (
  userId,
  examId,
  score,
  totalCorrect,
  totalQuestions,
) => {
  const result = await submitResultModel(
    userId,
    examId,
    score,
    totalCorrect,
    totalQuestions,
  );

  return {
    success: true,
    message: "Result submitted successfully",
    resultId: result.insertId,
  };
};

// Get All Results
export const getAllResultsService = async () => {
  const results = await getAllResultsModel();

  return results;
};

// Get My Results
export const getMyResultsService = async (userId) => {
  const results = await getMyResultsModel(userId);

  return results;
};

//save result
export const submitExamService = async (userId, examId, answers) => {
  const questions = await getQuestionsByExamModel(examId);

  let correct = 0;

  questions.forEach((question) => {
    const userAnswer = answers.find((a) => a.questionId === question.id);

    if (userAnswer && userAnswer.answer === question.correct_answer) {
      correct++;
    }
  });

  const score = Math.round((correct / questions.length) * 10);

  await saveResultModel(userId, examId, score, questions.length);

  return {
    score,
    correct,
    total: questions.length,
  };
};

// Get User Results
export const getUserResultsService = async (userId) => {
  return await getUserResultsModel(userId);
};
