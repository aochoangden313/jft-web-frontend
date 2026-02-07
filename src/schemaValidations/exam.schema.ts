import { z } from "zod";

export const ExamStatusSchema = z.enum(["DRAFT", "PUBLISHED"]);

export const ExamSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  timeLimit: z.number(),
  status: ExamStatusSchema,
});

export type ExamType = z.TypeOf<typeof ExamSchema>;
