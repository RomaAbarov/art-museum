import { z } from "zod";

export const schemaSearch = z.object({
  search: z
    .string()
    .min(3, { message: "String must contain at least 3 characters" }),
});

export type TSearch = z.infer<typeof schemaSearch>;

export const defaultValues: TSearch = {
  search: "",
};
