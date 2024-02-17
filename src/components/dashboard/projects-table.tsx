import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { getProjects } from "@/services/project";
import { Button } from "../ui/button";
import Link from "next/link";
import { GrView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ProjectsTable() {
  const projects = getProjects();
  return (
    <>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead className="">Projects</TableHead>
            <TableHead>Place</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="">Client</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, i) => (
            <TableRow key={i}>
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
                    <Link href="">
                      <GrView size={16} />
                    </Link>
                  </Button>
                  <Button asChild className=" h-8" variant="ghost">
                    <Link href="">
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
          ))}
        </TableBody>
      </Table>
    </>
  );
}
