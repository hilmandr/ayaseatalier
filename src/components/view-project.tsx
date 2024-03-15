"use client";

import Container from "@/components/container";
import Link from "next/link";
import { GetProjectBySlug } from "@/actions/project";
import { Metadata } from "next";
import { RxCaretRight } from "react-icons/rx";
import { Project } from "@/db/schema";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/js/plugins/image.min.js";

interface PageParams {
  project: Project;
}

export const generateMetadata = async ({
  project,
}: PageParams): Promise<Metadata> => {
  const post = await GetProjectBySlug(project.slug);
  return {
    title: post.title + " - Ayaase Atalier",
    description: post.summary,
  };
};

export default function ViewProject({ project }: PageParams) {
  return (
    <>
      <div className=" w-full flex items-center justify-center">
        <div className=" bg-black w-full h-[700px] absolute z-10 bg-opacity-50"></div>

        <div className=" container mx-auto px-5 lg:px-8 w-full h-full absolute z-20">
          <div className=" grid grid-cols-5 w-full h-full items-center text-white">
            <div className=" grid gap-y-2 lg:col-span-3 col-span-5">
              <h1 className=" lg:text-6xl md:text-4xl text-4xl font-semibold lg:leading-tight">
                {project.title}
              </h1>
              <h2 className=" lg:text-lg text-base font-normal">
                {project.summary}
              </h2>
            </div>
          </div>
        </div>
        <div
          className=" bg-cover bg-center w-full h-[700px] z-0 relative"
          //   style={{ backgroundImage: `url(${project.thumbnail})` }}
        ></div>
      </div>
      <Container>
        <div className=" xl:px-[350px] lg:px-48 md:px-32 pt-24 space-y-5">
          <div className=" flex w-full items-center">
            <Link href="/">
              <p className=" font-bold">Home </p>
            </Link>
            <RxCaretRight />
            <Link href="/projects">
              <p className=" font-bold">Projects</p>
            </Link>
            <RxCaretRight />
            <p>{project.title}</p>
          </div>
          <FroalaEditorView model={project.content} />
        </div>
      </Container>
    </>
  );
}
