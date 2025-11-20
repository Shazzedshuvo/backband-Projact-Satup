import { Router } from "express";
import { StudentControllar } from "./student.controlar.js";

const router = Router();

router.post("/student-Create",StudentControllar.studentControllar);

export const StudentRouter =  router ;
