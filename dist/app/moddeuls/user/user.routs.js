import { Router } from "express";
import { AuthController } from "./user.controlar.js";
const rouuter = Router();
rouuter.post("/singup", AuthController.signup);
export const LoginRouter = rouuter;
//# sourceMappingURL=user.routs.js.map