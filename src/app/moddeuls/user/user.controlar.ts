import { type Request, type Response } from "express";
import type { IUsar } from "./user.intarface.js";
import { AuthService } from "./user.sarvice.js";


// Arrow function style
const signup = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body as IUsar;

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
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Export as object
export const AuthController = { signup };
