import { IProjects } from "@/types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getProjectsBySlug = (slug: string): IProjects => {
  const folder = path.join(process.cwd(), "/src/data/projects/");
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return {
    title: matterResult.data.title,
    thumbnail: matterResult.data.thumbnail,
    date: matterResult.data.date,
    summary: matterResult.data.summary,
    content: matterResult.content,
    client: matterResult.data.client,
    slug: file.replace(".mdx", ""),
    place: matterResult.data.place,
    images: matterResult.data.images,
  };
};

export const getProjects = (): IProjects[] => {
  const folder = path.join(process.cwd(), "src/data/projects/");
  const files = fs.readdirSync(folder);
  const markDownProjects = files.filter((file) => file.endsWith(".mdx"));

  const projects = markDownProjects.map((filename) => {
    const fileContents = fs.readFileSync(
      `src/data/projects/${filename}`,
      "utf-8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      thumbnail: matterResult.data.thumbnail,
      date: matterResult.data.date,
      summary: matterResult.data.summary,
      content: matterResult.content,
      client: matterResult.data.client,
      slug: filename.replace(".mdx", ""),
      place: matterResult.data.place,
      images: matterResult.data.images,
    };
  });
  return projects;
};
