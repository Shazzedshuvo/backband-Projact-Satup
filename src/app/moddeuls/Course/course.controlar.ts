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


const allCoursesControlar =async(req:Request,res:Response)=>{

  try {


    const result= await CourseSarvises.getallcoursesSarvises()  

    res.status(200).json({
      success:true,
      message:"Courses Find Successfully ",
      data:result

    })


    
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Course create error",
      error: error.message,
    });
  }




}


const getacoursesControlar =async(req:Request,res:Response)=>{

try {
  
  const id = req.params.id;

    const result = await CourseSarvises.getacoursesSarvisess(id as string);

 res.status(200).json({
      success:true,
      message:"Courses Find Successfully ",
      data:result

    })


} catch (error: any) {
    res.status(500).json({
      success: false,
      message: "No courses found",
      error: error.message,
    });
}

}


const coursesUpdeteControlar =async (req:Request,res:Response)=>{


  try {
    

    const  result = await CourseSarvises.updateCourseSarvises(req.params.id as string,req.body)


res.status(200).json({
      success:true,
      message:"Courses Update Successfully ",
      data:result

    })


  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "update ",
      error: error.message,
    });
  } 




}


const courseDelite=async(req:Request,res:Response)=>{

  try {
    const id =req.params.id
    const result= await CourseSarvises.deleteCourseSarvises(id as string)
     res.status(200).json({
      success:true,
      message:"Courses dletate Successfully ",
      data:result

    })

    
  }  catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Some thing Went to be a rong",
      error: error.message,
    });
    
  }


}





export const CourseControlar = {
  createcoursecontrolar,
  allCoursesControlar,
  getacoursesControlar,
  coursesUpdeteControlar,
};
