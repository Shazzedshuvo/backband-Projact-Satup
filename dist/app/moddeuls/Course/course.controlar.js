import { CourseSarvises } from "./course,sarvice.js";
const createcoursecontrolar = async (req, res) => {
    try {
        const data = req.body;
        const usar = await CourseSarvises.courseSarvises(data);
        res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: usar,
        });
    }
    catch (error) {
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
//# sourceMappingURL=course.controlar.js.map