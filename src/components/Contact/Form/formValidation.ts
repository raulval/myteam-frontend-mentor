import * as yup from "yup";

export const validation = yup.object({
  name: yup
    .string()
    .matches(/^[A-z][A-z ,.'-]+$/, "Letters only")
    .max(20, "Must be 20 characters or less.")
    .required("Required!"),
  email: yup.string().email("Invalid email").required("Required!"),
  company: yup
    .string()
    .max(20, "Must be 20 characters or less.")
    .required("Required!"),
  title: yup
    .string()
    .max(20, "Must be 20 characters or less.")
    .required("Required!"),
  message: yup
    .string()
    .max(250, "Must be 250 characters or less.")
    .required("Required!"),
});
