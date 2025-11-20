import type { Request, Response } from "express";
import { CourseSarvises } from "./course,sarvice.js";

const createcoursecontrolar = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const usar = await CourseSarvises.courseSarvises(data);

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: usar,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Course create error",
      error: error.message,
    });
  }
};

export const CourseControlar = {
  createcoursecontrolar,
};
