import { model, Schema } from "mongoose";
const authSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, enum: ["creator", "admin", "visitor"] },
}, {
    timestamps: true,
});
export const AuthModel = model("Auth", authSchema);
//# sourceMappingURL=auth.model.js.map