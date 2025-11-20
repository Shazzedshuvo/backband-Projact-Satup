import { Usermodel } from "./user.model.js";
// Arrow function style
const signupSarvice = async (payload) => {
    // Check if user already exists
    const existingUser = await Usermodel.findOne({ email: payload.email });
    if (existingUser) {
        throw new Error("User already exists, Please login");
    }
    // 2️⃣ Create new user
    const newUser = await Usermodel.create(payload);
    return newUser;
};
// Export as object
export const AuthService = { signupSarvice };
//# sourceMappingURL=user.sarvice.js.map