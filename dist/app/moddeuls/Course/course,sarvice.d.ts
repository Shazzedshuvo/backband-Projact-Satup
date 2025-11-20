import type { Icourse } from "./course.intarface.js";
export declare const CourseSarvises: {
    courseSarvises: (paylod: Icourse) => Promise<import("mongoose").Document<unknown, {}, Icourse, {}, {}> & Icourse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=course,sarvice.d.ts.map