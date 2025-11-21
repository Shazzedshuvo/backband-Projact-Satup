import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import { CourseRouter } from "./app/moddeuls/Course/course.routs.js";
import { LoginRouter } from "./app/moddeuls/user/user.routs.js";
import { StudentRouter } from "./app/moddeuls/student/student.route.js";
import { AuthROutar } from "./app/moddeuls/Auth/auth.route.js";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! I am Shuvo");
});

app.use("/api/course/", CourseRouter);
app.use("/api/", LoginRouter);
app.use("/api/", StudentRouter);
app.use("/api/auth/", AuthROutar);

export default app;
  