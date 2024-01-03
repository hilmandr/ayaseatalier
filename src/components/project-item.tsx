"use client";
import React from "react";
import { IProjects } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface ProjectItem2Props {
  project: IProjects;
}
export default function ProjectItems2({ project }: ProjectItem2Props) {
  const wordCount = project.content?.split(/\s+/).length;
  return (
    <>
      <div className=" flex flex-col w-full">
        <Link href={`/projects/${project.slug}`} className=" flex flex-col">
          <div className=" flex flex-col group">
            <div className="flex w-full aspect-video relative overflow-hidden">
              <Image
                src={project.thumbnail as string}
                fill
                alt=""
                className="object-cover transform transition-all scale-125 group-hover:scale-100 duration-500 visible object-center"
              ></Image>
            </div>
            <div className=" flex flex-col text-center p-3">
              <h3 className=" font-bold">{project.title}</h3>
              <h4 className=" font-light tracking-widest text-xs">
                {project.place}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
