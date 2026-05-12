import {
  getAllExamsService,
  getExamTimerService,
} from "../../services/examService.js";

import { getRandomQuestionsModel } from "../../models/questionModel.js";

// Get Exams
export const getUserExams = async (req, res, next) => {
  try {
    const exams = await getAllExamsService();

    res.status(200).json({
      success: true,
      data: exams,
    });
  } catch (error) {
    next(error);
  }
};

export const getExamTimer = async (req, res, next) => {
  try {
    const { id } = req.params;

    const exam = await getExamTimerService(id);

    res.status(200).json({
      success: true,
      examId: id,
      title: exam.title,
      timeLimit: exam.time_limit,
    });
  } catch (error) {
    next(error);
  }
};

export const getRandomQuestions = async (req, res, next) => {
  try {
    const { id } = req.params;

    const questions = await getRandomQuestionsModel(id);

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    next(error);
  }
};
