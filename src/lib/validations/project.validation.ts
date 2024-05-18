import { log } from "console";
import { z } from "zod";

export const createProjectRequest = z.object({
  title: z.string().min(1, {
    message: "Title must be filled.",
  }),
  place: z.string().min(1, {
    message: "Place must be filled.",
  }),
  client: z.string().min(1, {
    message: "Client must be filled.",
  }),
  date: z.date(),
  summary: z.string().min(1, {
    message: "Summary must be filled.",
  }),
  content: z.string().min(1, {
    message: "Content must be filled.",
  }),
});

export type CreateProjectRequest = z.infer<typeof createProjectRequest>;
