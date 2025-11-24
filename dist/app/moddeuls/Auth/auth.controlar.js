import { AuthModel } from "./auth.model.js";
import bcrypt from "bcryptjs";
import jwt, {} from "jsonwebtoken";
const singup = async (req, res) => {
    const { name, password, phone, email, role } = req.body;
    try {
        // Validation
        if (!name || !password || !phone || !email || !role) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields",
            });
        }
        // User exists Kore ki na oita chak koro
        const existingUser = await AuthModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists, Please login",
            });
        }
        //pasword hash kororjono bycripjs use korsee
        const sucurePassword = await bcrypt.hash(password, 10);
        //  jodi usar na paw tahole  Create  koro user
        const newUser = await AuthModel.create({
            name,
            password: sucurePassword,
            phone,
            email,
        });
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
        });
    }
};
const login = async (req, res) => {
    //body take distrakchar korbo
    const { email, password } = req.body;
    try {
        //jodi email and password na take thahole aita korbe
        if (!email || !password) {
            return res.status(500).json({
                success: false,
                message: "Please Entar Email And Password",
            });
        }
        //jodi email thake thole databage thake find korbe
        let user;
        user = await AuthModel.findOne({ email });
        //jodi usar na take thole singup koro
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Please SingUp or Use Right email and password",
            });
        }
        // password unHase ba compare korte hobe
        let comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(500).json({
                success: false,
                message: " Invalid email and password",
            });
        }
        // const payload = {
        //   id: user._id,
        //   role: user.role,
        // };
        // const token = jwt.sign(payload,process.env.JWT_CODE as Secret,{
        //   expiresIn:"7d"
        // });
        // jodi condidion ture hoi thahole aitate dokbe
        return res.status(201).json({
            success: true,
            message: "Wellcome Back bro",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Usar Not Found Pless SingUP",
        });
    }
};
export const AuthControlar = { singup, login };
//# sourceMappingURL=auth.controlar.js.map