import { model, Schema } from "mongoose";
import type { IAuth } from "./auth.intarfase.js";

const authSchema = new Schema<IAuth>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const AuthModel = model<IAuth>("Auth", authSchema);
