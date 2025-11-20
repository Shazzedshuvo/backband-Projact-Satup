import { Router } from "express";
import { CourseControlar } from "./course.controlar.js";
const routar = Router();
routar.post("/createcourse", CourseControlar.createcoursecontrolar);
export const CourseRouter = routar;
//# sourceMappingURL=course.routs.js.map