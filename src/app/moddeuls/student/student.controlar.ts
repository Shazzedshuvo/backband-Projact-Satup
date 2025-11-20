import type { Request, Response } from "express";
import { StudentSarvises } from "./student.sarvises.js";

const studentControllar = async (req: Request, res: Response) => {


 try {
       const data =req.body
    const Newstudent = await StudentSarvises.studentSarvises(data)
      

     res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: Newstudent,
    });

 } catch (error:any) {
    res.status(500).json({
        success: false,
        message:"Student Create error",
        error:error.message,
    })
    
 }



};





export const StudentControllar = {
  studentControllar,
};
