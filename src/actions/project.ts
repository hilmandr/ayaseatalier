"use server";

import { db } from "@/db";
import { Project, project } from "@/db/schema";
import { CreateProjectRequest } from "@/lib/validations/project.validation";

export const createProject = async (request: CreateProjectRequest) => {
  const newProject = await db
    .insert(project)
    .values({
      title: request.title,
      summary: request.summary,
      content: request.content,
      thumbnail: request.thumbnail,
      client: request.client,
      date: request.date,
      place: request.place,
    })
    .returning();

  return newProject;
};

export const GetProjects = async (): Promise<Project[]> => {
  const projects = await db.query.project.findMany();

  return projects;
};
