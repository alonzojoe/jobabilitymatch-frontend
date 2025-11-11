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
    birthdate: z
      .string()
      .trim()
      .nonempty({ message: "Birthdate is required" })
      .refine(
        (date) => {
          const selectedDate = new Date(date);
          const maxDate = new Date();
          maxDate.setFullYear(maxDate.getFullYear() - 18);
          return selectedDate <= maxDate;
        },
        { message: "You must be at least 18 years old" }
      ),
    gender: z.string().trim().nonempty({ message: "Gender is required" }),
    address: z.string().trim().nonempty({ message: "Address is required" }),
    phone: z.string().trim().nonempty({ message: "Phone is required" }),
    pwd_id_no: z
      .string()
      .trim()
      .nonempty({ message: "PWD ID Number is required" }),
    pwdid_picture: z
      .any()
      .refine((files) => files?.[0], { message: "PWD ID picture is required" })
      .refine((files) => files?.[0]?.size <= 2097152, {
        message: "Image size must be less than 2MB",
      })
      .refine(
        (files) =>
          ["image/jpeg", "image/jpg", "image/png"].includes(files?.[0]?.type),
        { message: "Only JPEG and PNG images are allowed" }
      ),
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

export const pwdUpdateSchema = z
  .object({
    lastname: z.string().trim().nonempty({ message: "Last Name is required" }),
    firstname: z
      .string()
      .trim()
      .nonempty({ message: "First Name is required" }),
    middlename: z.string().trim().optional(),
    birthdate: z
      .string()
      .trim()
      .nonempty({ message: "Birthdate is required" })
      .refine(
        (date) => {
          const selectedDate = new Date(date);
          const maxDate = new Date();
          maxDate.setFullYear(maxDate.getFullYear() - 18);
          return selectedDate <= maxDate;
        },
        { message: "You must be at least 18 years old" }
      ),
    gender: z.string().trim().nonempty({ message: "Gender is required" }),
    address: z.string().trim().nonempty({ message: "Address is required" }),
    phone: z.string().trim().nonempty({ message: "Phone is required" }),
    pwd_id_no: z
      .string()
      .trim()
      .nonempty({ message: "PWD ID Number is required" }),
    pwdid_picture: z
      .any()
      .optional()
      .refine((files) => !files?.[0] || files?.[0]?.size <= 5242880, {
        message: "Image size must be less than 5MB",
      })
      .refine(
        (files) =>
          !files?.[0] ||
          ["image/jpeg", "image/jpg", "image/png"].includes(files?.[0]?.type),
        { message: "Only JPEG and PNG images are allowed" }
      ),
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
    birthdate: z
      .string()
      .trim()
      .nonempty({ message: "Birthdate is required" })
      .refine(
        (date) => {
          const selectedDate = new Date(date);
          const maxDate = new Date();
          maxDate.setFullYear(maxDate.getFullYear() - 18);
          return selectedDate <= maxDate;
        },
        { message: "You must be at least 18 years old" }
      ),
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

export const postingSchema = z
  .object({
    title: z.string().trim().nonempty({ message: "Job title is required" }),
    vacant_positions: z
      .string()
      .trim()
      .nonempty({ message: "Vacant Position/s is required" }),
    hiring_from: z
      .string()
      .trim()
      .nonempty({ message: "Hiring start date is required" })
      .refine(
        (date) => {
          const selectedDate = new Date(date);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Reset time to compare only dates
          return selectedDate >= today;
        },
        { message: "Hiring start date cannot be in the past" }
      ),
    hiring_to: z
      .string()
      .trim()
      .nonempty({ message: "Hiring end date is required" }),
  })
  .refine(
    (data) => {
      const fromDate = new Date(data.hiring_from);
      const toDate = new Date(data.hiring_to);
      return toDate >= fromDate;
    },
    {
      message: "Hiring end date must be on or after the start date",
      path: ["hiring_to"],
    }
  );

export const adminSchema = z
  .object({
    lastname: z.string().trim().nonempty({ message: "Last Name is required" }),
    firstname: z
      .string()
      .trim()
      .nonempty({ message: "First Name is required" }),
    middlename: z.string().trim().optional(),
    birthdate: z
      .string()
      .trim()
      .nonempty({ message: "Birthdate is required" })
      .refine(
        (date) => {
          const selectedDate = new Date(date);
          const maxDate = new Date();
          maxDate.setFullYear(maxDate.getFullYear() - 18);
          return selectedDate <= maxDate;
        },
        { message: "You must be at least 18 years old" }
      ),
    gender: z.string().trim().nonempty({ message: "Gender is required" }),
    address: z.string().trim().nonempty({ message: "Address is required" }),
    phone: z.string().trim().nonempty({ message: "Phone is required" }),
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

export const changePassSchema = z
  .object({
    email: z
      .string()
      .trim()
      .nonempty({ message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
    oldpassword: z
      .string()
      .trim()
      .nonempty({ message: "Password is required" })
      .min(6, { message: "Old password must be at least 6 characters long" }),
    newpassword: z
      .string()
      .trim()
      .nonempty({ message: "New password is required" })
      .min(6, { message: "New password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .trim()
      .nonempty({ message: "Confirm new password is required" })
      .min(6, {
        message: "Confirm new password must be at least 6 characters long",
      }),
  })
  .refine((val) => val.newpassword === val.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
