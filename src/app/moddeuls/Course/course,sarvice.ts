import type { Icourse } from "./course.intarface.js";
import { CourseModel } from "./course.model.js";



const courseSarvises = async (paylod: Icourse) => {
    
  const NewUsar = await CourseModel.create(paylod);
  return NewUsar;
};


export const CourseSarvises = { courseSarvises };
