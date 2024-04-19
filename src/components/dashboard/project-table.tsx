"use client";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { GrView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { Project } from "@/db/schema";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProjectById } from "@/actions/project";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

interface ProjectItemProps {
  project: Project[];
}

export default function ProjectsTable({ project }: ProjectItemProps) {
  const route = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined
  );
  const [showDilaog, setShowDialog] = useState<boolean>(false);
  const handleShowDialog = (project: Project) => {
    setShowDialog((prev) => !prev);
    setSelectedProject(project);
  };

  const handleDelete = () => {
    if (selectedProject) {
      deleteProjectById(selectedProject.id);
      toast.success("Project Was Deleted!");
      setShowDialog((prev) => !prev);
      setSelectedProject(undefined);

      route.push("/ad");
    }
  };
  const [listProject, setlistProject] = useState(project);
  const [searchProject, setsearchProject] = useState("");
  const handleSearchProject = (e: any) => {
    const text = e.target.value;
    if (text != "") {
      let results = [...project];
      results = results.filter((project) => {
        return project.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      });
      setlistProject(results);
    } else {
      setlistProject(project);
    }

    setsearchProject(e.target.value);
  };

  return (
    <>
      <div className=" flex w-80 my-5">
        <Input
          type="text"
          placeholder="Search Project.."
          value={searchProject}
          onChange={handleSearchProject}
        />
      </div>

      <div className=" border rounded-lg overflow-hidden">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Project Title</TableHead>
              <TableHead>Place</TableHead>
              <TableHead>Date Published</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          {listProject.length === 0 ? (
            <>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={6} className=" text-center">
                    There is nothing to show. Please add some project.
                  </TableCell>
                </TableRow>
              </TableFooter>
            </>
          ) : (
            <>
              <TableBody>
                {listProject.map((project, i) => (
                  <>
                    <TableRow>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{project?.title}</TableCell>
                      <TableCell>{project?.place}</TableCell>
                      <TableCell>
                        {format(
                          project?.date ? new Date(project?.date) : new Date(),
                          "dd MMM, yyyy"
                        )}
                      </TableCell>
                      <TableCell>{project?.client}</TableCell>
                      <TableCell>
                        <div className=" flex">
                          <Button asChild className=" h-8" variant="ghost">
                            <Link href={`/projects/${project.slug}`}>
                              <GrView size={16} />
                            </Link>
                          </Button>
                          <Button asChild className=" h-8" variant="ghost">
                            <Link
                              href={`/dashboard/projects/edit/${project.slug}`}
                            >
                              <AiOutlineEdit size={16} />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => handleShowDialog(project)}
                          >
                            <FaRegTrashAlt fill="red" size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </div>

      <Dialog open={showDilaog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Hapus Project</DialogTitle>
            <DialogDescription>
              Anda yakin akan menghapus project?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              asChild
              className=" h-8"
              onClick={handleDelete}
              variant={"destructive"}
            >
              <span>Ya</span>
            </Button>
            <DialogClose asChild>
              <Button>Tidak</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
