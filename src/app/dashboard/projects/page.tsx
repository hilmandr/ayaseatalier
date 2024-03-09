import Header from "@/components/dashboard/header";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { GetProjects } from "@/actions/project";
import ProjectsTableDb from "@/components/dashboard/project-table";

export default async function InputProjectPage() {
  const projects = await GetProjects();
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
              <div className=" flex w-80">
                <Input type="text" placeholder="Search" />
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
