import {
  submitResultService,
  getMyResultsService,
  submitExamService,
  getUserResultsService,
} from "../../services/resultService.js";

// Submit Result
export const submitResult = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { examId, score, totalCorrect, totalQuestions } = req.body;

    const result = await submitResultService(
      userId,
      examId,
      score,
      totalCorrect,
      totalQuestions,
    );

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Get My Results
export const getMyResults = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const results = await getMyResultsService(userId);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    next(error);
  }
};

//Submit Exam
export const submitExam = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { examId, answers } = req.body;

    const result = await submitExamService(userId, examId, answers);

    res.status(200).json({
      success: true,
      message: "Submit successfully",
      result,
    });
  } catch (error) {
    next(error);
  }
};

//Get History
export const getUserResults = async (req, res, next) => {
  try {
    const results = await getUserResultsService(req.user.id);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    next(error);
  }
};
