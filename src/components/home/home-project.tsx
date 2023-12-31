"use client";
import React from "react";
import Link from "next/link";
import ProjectItems2 from "../project-item";
import { getProjects } from "@/services/project";
import { Element } from "react-scroll";
import { IProjects } from "@/types";

interface ProjectItem2Props {
  projects: IProjects[];
}

export default function HomeProject({ projects }: ProjectItem2Props) {
  return (
    <>
      <Element name="project">
        <div className=" flex">
          <div className=" flex w-full items-center justify-between">
            <h1 className=" text-5xl font-normal">WORKS</h1>
            <Link
              href="/projects"
              className=" border border-stone-800 rounded-full py-2 px-5 text-sm text-stone-900 bg-white hover:bg-black hover:text-white transition-all duration-100"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-10 gap-10">
          {projects?.map((projects, i) => (
            <ProjectItems2 project={projects} key={i} />
          ))}
        </div>
      </Element>
    </>
  );
}
