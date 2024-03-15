"use server";

import { db } from "@/db";
import { Project, project } from "@/db/schema";
import { CreateProjectRequest } from "@/lib/validations/project.validation";
import { eq } from "drizzle-orm";

export const createProject = async (request: CreateProjectRequest) => {
  function slugify(str: string) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
    str = str.toLowerCase(); // convert string to lowercase
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-"); // remove consecutive hyphens
    return str;
  }

  const newProject = await db
    .insert(project)
    .values({
      slug: slugify(request.title),
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

export const GetProjectBySlug = async (slug: string): Promise<Project> => {
  const slugProject: any = await db.query.project.findFirst({
    where: eq(project.slug, slug),
  });

  return slugProject;
};
