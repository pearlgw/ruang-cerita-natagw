import { object, string } from "zod";

export const RegisterSchema = object({
    name: string().min(1, "Name must be more than 1 Character"),
    email: string().email("Invalid Email"),
    password: string().min(8, "Password must be more than 8 characters").max(32, "Password must be more than 8 characters"),
    ConfirmPassword: string().min(8, "Password must be more than 8 characters").max(32, "Password must be more than 8 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
    message: "Password does not much",
    path: ["ConfirmPassword"]
});

export const SignInSchema = object({
    email: string().email("Invalid Email"),
    password: string().min(8, "Password must be more than 8 characters").max(32, "Password must be more than 8 characters"),
});