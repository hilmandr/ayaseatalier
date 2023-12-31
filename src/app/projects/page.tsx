import { getProjects } from "@/services/project";
import Container from "@/components/container";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectItems2 from "@/components/project-item";

export default function ProjectItemPage() {
  const projects = getProjects();

  return (
    <>
      <Header />
      <Container>
        <div className=" flex grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-10 gap-10 pt-36">
          {projects.map((projects, i) => (
            <ProjectItems2 project={projects} key={i} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
