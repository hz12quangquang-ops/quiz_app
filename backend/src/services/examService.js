import {
  createExamModel,
  getAllExamsModel,
  searchExamsModel,
  updateExamModel,
  deleteExamModel,
  getExamTimerModel,
} from "../models/examModel.js";

// Create Exam
export const createExamService = async (
  title,
  description,
  timeLimit,
  createdBy,
) => {
  const result = await createExamModel(
    title,
    description,
    timeLimit,
    createdBy,
  );

  return {
    success: true,
    message: "Exam created successfully",
    examId: result.insertId,
  };
};

// Get All Exams
export const getAllExamsService = async (limit, offset) => {
  return await getAllExamsModel(limit, offset);
};

// Search Exams
export const searchExamsService = async (keyword) => {
  return await searchExamsModel(keyword);
};

// Update Exam
export const updateExamService = async (id, title, description, timeLimit) => {
  await updateExamModel(id, title, description, timeLimit);

  return {
    success: true,
    message: "Exam updated successfully",
  };
};

// Delete Exam
export const deleteExamService = async (id) => {
  await deleteExamModel(id);

  return {
    success: true,
    message: "Exam deleted successfully",
  };
};

// Get Exam Timer
export const getExamTimerService = async (id) => {
  return await getExamTimerModel(id);
};
