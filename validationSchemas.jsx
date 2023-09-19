import { object, string } from "yup";

export const signUpSchema = object().shape({
  name: string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required.")
    .matches(/^[a-zA-Z]+$/, "Name must contain only letters"),
  email: string().email("Invalid email format").required("Email is required"),
  password: string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Invalid password."
    ),
});

export const loginSchema = object().shape({
  email: string().email("Invalid email format").required("Email is required"),
  password: string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Invalid password."
    ),
});
