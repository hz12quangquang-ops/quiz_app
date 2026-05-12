import {
  createExamService,
  getAllExamsService,
  updateExamService,
  deleteExamService,
  searchExamsService,
} from "../../services/examService.js";

// Create Exam
export const createExam = async (req, res, next) => {
  try {
    const { title, description, timeLimit } = req.body;

    const createdBy = req.user.id;

    const result = await createExamService(
      title,
      description,
      timeLimit,
      createdBy,
    );

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Get All Exams
export const getAllExams = async (req, res, next) => {
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

// Update Exam
export const updateExam = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { title, description, timeLimit } = req.body;

    const result = await updateExamService(id, title, description, timeLimit);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Delete Exam
export const deleteExam = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteExamService(id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Search Exams
export const searchExams = async (req, res, next) => {
  try {
    const { q } = req.query;

    const exams = await searchExamsService(q);

    res.json({
      success: true,
      data: exams,
    });
  } catch (error) {
    next(error);
  }
};
