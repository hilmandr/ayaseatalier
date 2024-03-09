"use client";
import React from "react";
import Link from "next/link";
import ProjectItems2 from "../project-item";
import { Element } from "react-scroll";
import { IProjects } from "@/types";
import { useI18n } from "@/locales/client";

interface ProjectItem2Props {
  projects: IProjects[];
}

export default function HomeProject({ projects }: ProjectItem2Props) {
  const t = useI18n();
  return (
    <>
      <Element name="project">
        <div className=" flex">
          <div className=" flex w-full items-center justify-between">
            <h1 className=" text-5xl font-normal capitalize">
              {t("common.works")}
            </h1>
            <Link
              href="/projects"
              className=" border border-stone-800 rounded-full py-2 px-5 text-sm text-stone-900 bg-white hover:bg-black hover:text-white transition-all duration-100"
            >
              {t("works.discoverMore")}
            </Link>
          </div>
        </div>
        <div className="  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 pt-5 gap-x-10 gap-y-5">
          {projects?.map((projects, i) => (
            <ProjectItems2 project={projects} key={i} />
          ))}
        </div>
      </Element>
    </>
  );
}
