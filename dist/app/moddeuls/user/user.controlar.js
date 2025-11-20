import {} from "express";
import { AuthService } from "./user.sarvice.js";
// Arrow function style
const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        // 1️⃣ Required fields validation
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields",
            });
        }
        // 2️⃣ Call service
        const newUser = await AuthService.signupSarvice({ name, email, password, role });
        // 3️⃣ Success response
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// Export as object
export const AuthController = { signup };
//# sourceMappingURL=user.controlar.js.map