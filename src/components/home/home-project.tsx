"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Element } from "react-scroll";
import { Project } from "@/db/schema";
import { Image } from "@nextui-org/react";
import { EmojiSad, GalleryRemove } from "iconsax-react";

interface ProjectItem2Props {
  project: Project[];
}

export default function HomeProject({ project }: ProjectItem2Props) {
  const [listProject, setlistProject] = useState(project);
  return (
    <>
      <Element name="project">
        <div className=" flex">
          <div className=" flex w-full items-center justify-between">
            <h1 className=" text-5xl font-normal capitalize">WORKS</h1>
            <Link
              href="/projects"
              className=" border border-stone-800 rounded-full py-2 px-5 text-sm text-stone-900 bg-white hover:bg-black hover:text-white transition-all duration-100"
            >
              Discover More
            </Link>
          </div>
        </div>
        {listProject.length === 0 ? (
          <>
            <div className=" flex flex-col w-full aspect-[4/1.5] items-center justify-center">
              <EmojiSad size="96" color="#333333" variant="TwoTone" />
              <h1 className=" pt-5">
                Oops! There is no project to show at this time.
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 pt-5 gap-x-10 gap-y-5">
              {project?.slice(0, 6).map((projects, i) => (
                <Link
                  href={`/projects/${projects.slug}`}
                  className=" flex flex-col"
                  key={i}
                >
                  <div className=" flex flex-col group">
                    {projects.thumbnail == "" ? (
                      <div className="flex w-full justify-center items-center aspect-video relative overflow-hidden bg-gray-100">
                        <GalleryRemove
                          size={100}
                          className=" text-gray-400/75 transform transition-all scale-110 group-hover:scale-100 duration-500"
                          variant="Bold"
                        />
                      </div>
                    ) : (
                      <div className="flex w-full aspect-video relative overflow-hidden">
                        <Image
                          src={projects.thumbnail as string}
                          alt=""
                          className="object-cover transform transition-all scale-110 group-hover:scale-100 duration-500 visible object-center"
                        ></Image>
                      </div>
                    )}
                    <div className=" flex flex-col text-center p-3">
                      <h3 className=" font-bold">{projects?.title}</h3>
                      <h4 className=" font-light tracking-widest text-xs">
                        {projects?.place}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </Element>
    </>
  );
}
