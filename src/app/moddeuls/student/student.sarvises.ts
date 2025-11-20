import type { IStudent } from "./student.intarface.js";
import { StudentModel } from "./student.model.js";



const studentSarvises = async (paylod:IStudent)=>{  

    const NewStudent =await StudentModel.create(paylod);
    return NewStudent



}


export const StudentSarvises={studentSarvises}