import { Schema, model } from "mongoose";
import type { IUsar } from "./user.intarface.js";

const userSchema = new Schema<IUsar>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: { type: String, enum: ["student", "mentor", "admin"], default: "student" },
    


  },
  { timestamps: true }
);

export const Usermodel = model("Usermodel", userSchema);
