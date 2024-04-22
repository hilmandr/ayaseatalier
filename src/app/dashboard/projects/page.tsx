import Link from "next/link";

import Container from "@/components/container";
import ProjectsTableDb from "@/components/dashboard/project-table";
import { Button } from "@/components/ui/button";
import { IoIosAddCircle } from "react-icons/io";
import { getProjects } from "@/actions/project";
import Header from "@/components/dashboard/header";

export default async function InputProjectPage() {
  const projects = await getProjects();
  return (
    <>
      <div className=" flex w-full h-full bg-white text-sm">
        <Container>
          <Header />
          <div className=" flex flex-col w-full pt-8">
            <div className=" flex items-center justify-between w-full">
              <div className=" flex w-full items-center gap-4">
                <div className="">
                  <h1 className=" text-lg">Manage your projects</h1>
                </div>
                <div className="">
                  <Button asChild className=" w-full h-8">
                    <Link href="/dashboard/projects/input" className=" gap-2">
                      <IoIosAddCircle size={16} /> <p>Add Project</p>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className=" pt-4">
              {/* <ProjectsTable /> */}
              <ProjectsTableDb project={projects} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
