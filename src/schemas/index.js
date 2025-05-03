import { z } from "zod";

export const disabilitySchema = z.object({
  name: z.string().trim().nonempty({ message: "Disability type is required" }),
});

export const roleSchema = z.object({
  name: z.string().trim().nonempty({ message: "Role is required" }),
});

export const authSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const pwdSchema = z
  .object({
    lastname: z.string().trim().nonempty({ message: "Last Name is required" }),
    firstname: z
      .string()
      .trim()
      .nonempty({ message: "First Name is required" }),
    middlename: z.string().trim().optional(),
    birthdate: z.string().trim().nonempty({ message: "Birthdate is required" }),
    gender: z.string().trim().nonempty({ message: "Gender is required" }),
    address: z.string().trim().nonempty({ message: "Address is required" }),
    phone: z.string().trim().nonempty({ message: "Phone is required" }),
    pwd_id_no: z
      .string()
      .trim()
      .nonempty({ message: "PWD ID Number is required" }),
    role_id: z.number().min(1, "Role is required"),
    // disability_type_ids: z
    //   .array(z.string())
    //   .min(1, { message: "Please select at least" }),
    email: z
      .string()
      .trim()
      .nonempty({ message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .trim()
      .nonempty({ message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .trim()
      .nonempty({ message: "Confirm password is required" })
      .min(6, {
        message: "Confirm password must be at least 6 characters long",
      }),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const updateSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  phone: z.string().trim().nonempty({ message: "Phone is required" }),
  gender: z.string().trim().nonempty({ message: "Gender is required" }),
  position_id: z.string().min(1, "Position is required"),
});

export const employerSchema = z
  .object({
    lastname: z.string().trim().nonempty({ message: "Last Name is required" }),
    firstname: z
      .string()
      .trim()
      .nonempty({ message: "First Name is required" }),
    middlename: z.string().trim().optional(),
    birthdate: z.string().trim().nonempty({ message: "Birthdate is required" }),
    gender: z.string().trim().nonempty({ message: "Gender is required" }),
    address: z.string().trim().nonempty({ message: "Address is required" }),
    phone: z.string().trim().nonempty({ message: "Phone is required" }),
    company: z.string().trim().nonempty({ message: "Company is required" }),
    company_address: z
      .string()
      .trim()
      .nonempty({ message: "Company address is required" }),
    email: z
      .string()
      .trim()
      .nonempty({ message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .trim()
      .nonempty({ message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .trim()
      .nonempty({ message: "Confirm password is required" })
      .min(6, {
        message: "Confirm password must be at least 6 characters long",
      }),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
