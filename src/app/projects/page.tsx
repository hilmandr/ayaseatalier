import { getProjects } from "@/services/project";
import Container from "@/components/container";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectItems2 from "@/components/project-item";
import Link from "next/link";
export default function ProjectItemPage() {
  const projects = getProjects();

  return (
    <>
      <Header />
      <Container>
        <div className=" flex pt-32 ">
          <Link href="/">
            <p className=" font-semibold">Home </p>
          </Link>
          <p className=" cursor-default">/Projects</p>
        </div>
        <div className=" flex grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-10 gap-10">
          {projects.map((projects, i) => (
            <ProjectItems2 project={projects} key={i} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
