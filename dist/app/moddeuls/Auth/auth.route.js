import { Router } from "express";
import { AuthControlar } from "./auth.controlar.js";
const routar = Router();
routar.post("/singup", AuthControlar.singup);
routar.post("/login", AuthControlar.login);
export const AuthROutar = routar;
//# sourceMappingURL=auth.route.js.map