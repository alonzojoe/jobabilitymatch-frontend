import { z } from "zod";

export const disabilitySchema = z.object({
  name: z.string().trim().nonempty({ message: "Disability type is required" }),
});
