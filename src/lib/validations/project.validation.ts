import { z } from "zod";

export const createProjectRequest = z.object({
  // slug: z.string().min(1),
  title: z.string().min(1, {
    message: "Title must be filled.",
  }),
  place: z.string().min(1, {
    message: "Place must be filled.",
  }),
  client: z.string().min(1, {
    message: "Place must be filled.",
  }),
  date: z.date(),
  summary: z.string().min(1, {
    message: "Place must be filled.",
  }),
  thumbnail: z.string().min(1, {
    message: "Place must be filled.",
  }),
  content: z.string().min(1, {
    message: "Place must be filled.",
  }),
});

export type CreateProjectRequest = z.infer<typeof createProjectRequest>;
