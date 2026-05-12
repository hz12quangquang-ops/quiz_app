import {
  createQuestionService,
  getQuestionsByExamService,
  deleteQuestionService,
  getRandomQuestionsService,
} from "../../services/questionService.js";

// Create Question
export const createQuestion = async (req, res, next) => {
  try {
    const {
      examId,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
    } = req.body;

    const result = await createQuestionService(
      examId,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
    );

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Get Questions By Exam
export const getQuestionsByExam = async (req, res, next) => {
  try {
    const { examId } = req.params;

    const questions = await getQuestionsByExamService(examId);

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Question
export const deleteQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteQuestionService(id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getRandomQuestions = async (req, res, next) => {
  try {
    const { examId } = req.params;

    const limit = req.query.limit || 10;

    const questions = await getRandomQuestionsService(examId, limit);

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    next(error);
  }
};
