import Image from "next/image";
import Container from "@/components/container";
import Hero from "@/components/home/hero";
import HomeProject from "@/components/home/home-project";
import HomeContact from "@/components/home/home-contact";
import { Project } from "@/db/schema";
import { GetProjects } from "@/actions/project";

interface ProjectItem2Props {
  project: Project[];
}

export default async function Home({ project }: ProjectItem2Props) {
  const projects = await GetProjects();
  return (
    <>
      <Hero />
      <Container>
        <div className="  flex-col justify-between gap-4 lg:gap-10 flex lg:flex-row items-center py-28 bg-white w-full">
          <div className=" w-full h-[312px] relative">
            <Image
              src="/image/projects/ksm/ksm-01.jpeg"
              alt=""
              fill
              className="object-cover object-center"
            ></Image>
          </div>
          <div className=" text-black max-w-lg">
            <p className=" text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <HomeProject project={projects} />
        <HomeContact />
      </Container>
    </>
  );
}
