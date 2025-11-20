interface Singup {
    name: string;
    email: string;
    password: string;
    role: string;
}
export declare const AuthService: {
    signupSarvice: (payload: Singup) => Promise<import("mongoose").Document<unknown, {}, import("./user.intarface.js").IUsar, {}, import("mongoose").DefaultSchemaOptions> & import("./user.intarface.js").IUsar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
export {};
//# sourceMappingURL=user.sarvice.d.ts.map