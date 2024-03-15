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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProjectItemProps {
  project: Project[];
}

export default function ProjectsTable({ project }: ProjectItemProps) {
  return (
    <>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            {/* <TableHead>No</TableHead> */}
            <TableHead className="">Projects</TableHead>
            <TableHead>Place</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="">Client</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {project.map((project, i) => (
            <>
              <TableRow>
                {/* <TableCell>{project.id}</TableCell> */}
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
                      <Link href={`/dashboard/projects/${project.slug}`}>
                        <GrView size={16} />
                      </Link>
                    </Button>
                    <Button asChild className=" h-8" variant="ghost">
                      <Link href={`/dashboard/projects/edit/${project.slug}`}>
                        <AiOutlineEdit size={16} />
                      </Link>
                    </Button>
                    <Button asChild className=" h-8" variant="ghost">
                      <Link href="">
                        <FaRegTrashAlt fill="red" size={16} />
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
