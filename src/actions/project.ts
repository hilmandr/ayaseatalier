"use server";

import { db } from "@/db";
import { Project, project } from "@/db/schema";
import { slugify } from "@/lib/utils";
import { CreateProjectRequest } from "@/lib/validations/project.validation";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const createProject = async (
  request: CreateProjectRequest,
  thumbnail: string
) => {
  const newProject = await db
    .insert(project)
    .values({
      slug: slugify(request.title),
      title: request.title,
      summary: request.summary,
      content: request.content,
      client: request.client,
      date: request.date,
      place: request.place,
      thumbnail,
    })
    .returning();
  revalidatePath("/dashboard/projects");

  return newProject;
};

export const getProjects = async (): Promise<Project[]> => {
  const projects = await db.query.project.findMany();

  return projects;
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const slugProject: any = await db.query.project.findFirst({
    where: eq(project.slug, slug),
  });

  return slugProject;
};

export const deleteProjectById = async (id: string): Promise<Project> => {
  const deleteProject: any = await db
    .delete(project)
    .where(eq(project.id, id))
    .returning();
  revalidatePath("/dashboard/kegiatan-berita");
  return deleteProject;
};

export const editProjectById = async (
  request: CreateProjectRequest,
  thumbnail: string,
  id: string
) => {
  const editProject = await db
    .update(project)
    .set({
      title: request.title,
      summary: request.summary,
      content: request.content,
      client: request.client,
      date: request.date,
      place: request.place,
      thumbnail,
    })
    .where(eq(project.id, id));
  revalidatePath("/dashboard/projects");

  return editProject;
};
