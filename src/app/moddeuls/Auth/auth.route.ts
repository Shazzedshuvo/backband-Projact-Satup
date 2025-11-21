 import { Router } from "express";
import { AuthControlar } from "./auth.controlar.js";



  const routar =Router()


  routar.post("/singap",AuthControlar.singup),
  routar.post("/login",AuthControlar.login)
 


  export const AuthROutar =routar

 