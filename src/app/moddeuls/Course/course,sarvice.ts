import { Usermodel } from "../user/user.model.js";
import type { Icourse } from "./course.intarface.js";
import { CourseModel } from "./course.model.js";



const courseSarvises = async (paylod: Icourse) => {
    
  const NewUsar = await CourseModel.create(paylod);
  return NewUsar;
};

const getallcoursesSarvises= async () =>{
  const result = CourseModel.find()
  return result

}
const getacoursesSarvisess = async (id: string) => {
  const result = await CourseModel.findById(id);
  return result;
};


const updateCourseSarvises= async(id:string ,paylod:Partial < Icourse> ) =>{

  const result = await CourseModel.findByIdAndUpdate(id)
  return result
}



const deleteCourseSarvises= async( id:string)=>{


  const result = await CourseModel.findByIdAndUpdate(id)
}

export const CourseSarvises = { 
  courseSarvises ,
  getallcoursesSarvises,
  getacoursesSarvisess,
  updateCourseSarvises,
  deleteCourseSarvises,

};
