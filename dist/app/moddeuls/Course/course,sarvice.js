import { CourseModel } from "./course.model.js";
const courseSarvises = async (paylod) => {
    const NewUsar = await CourseModel.create(paylod);
    return NewUsar;
};
export const CourseSarvises = { courseSarvises };
//# sourceMappingURL=course,sarvice.js.map