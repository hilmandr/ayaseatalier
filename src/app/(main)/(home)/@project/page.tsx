import { getProjects } from "@/actions/project";
import HomeProject from "@/components/home/home-project";
import Link from "next/link";
import { Element } from "react-scroll";

export default async function HomeSectionProject() {
  const project = await getProjects();
  return (
    <>
      <HomeProject projects={project} />
    </>
  );
}
