import { getProjects, getProjectsBySlug } from "@/services/project";
import Container from "@/components/container";
import ProjectItems2 from "@/components/project-item";
import Link from "next/link";
import { Metadata } from "next";
import { RxCaretRight } from "react-icons/rx";

export const metadata: Metadata = {
  title: "Projects - Ayase Atalier",
};

export default function ProjectItemPage() {
  const projects = getProjects();

  return (
    <>
      <Container>
        <div className=" flex pt-32 w-full items-center">
          <Link href="/">
            <p className=" font-bold">Home </p>
          </Link>
          <RxCaretRight />
          <p className=" cursor-default">Projects</p>
        </div>
        <div className=" flex grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-10 gap-10">
          {projects.map((projects, i) => (
            <ProjectItems2 project={projects} key={i} />
          ))}
        </div>
      </Container>
    </>
  );
}
