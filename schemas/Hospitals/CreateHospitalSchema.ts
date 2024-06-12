import { z } from "zod";

export const createHospitalSchema = z.object({
  name: z.string().min(1, "Name is required").min(3, "Name is too short"),
  location: z
    .string()
    .min(1, "Location is required")
    .min(3, "Location is too short"),
  plans: z
    .array(
      z.object({
        value: z.object({
          id: z.number(),
          name: z
            .string()
            .min(1, "Plan name is required")
            .min(3, "Plan name is too short"),
        }),
      })
    )
    .min(1, "At least one plan is required"),
});

export type createHospitalInput = z.infer<typeof createHospitalSchema>;
