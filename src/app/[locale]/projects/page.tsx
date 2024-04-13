import Container from "@/components/container";
import Link from "next/link";
import { Metadata } from "next";
import { RxCaretRight } from "react-icons/rx";
import { getProjects } from "@/actions/project";
// import Image from "next/image";
import { Image } from "@nextui-org/react";
import { GalleryRemove } from "iconsax-react";

export const metadata: Metadata = {
  title: "Projects - Ayase Atalier",
};

export default async function ProjectItemPage() {
  const projects = await getProjects();
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
        <div className=" grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-10 gap-10">
          {projects?.map((project, i) => (
            <Link
              href={`/projects/${project?.slug}`}
              className=" flex flex-col"
              key={i}
            >
              <div className=" flex flex-col group">
                {project.thumbnail == "" ? (
                  <div className="flex w-full justify-center items-center aspect-video relative overflow-hidden bg-gray-100">
                    <GalleryRemove
                      size={100}
                      className=" text-gray-400/75 transform transition-all scale-110 group-hover:scale-100 duration-500"
                      variant="Bold"
                    />
                  </div>
                ) : (
                  <div className="flex w-full aspect-video relative overflow-hidden">
                    <Image
                      src={project?.thumbnail as string}
                      alt=""
                      className="object-cover transform transition-all scale-110 group-hover:scale-100 duration-500 visible object-center"
                    ></Image>
                  </div>
                )}

                <div className=" flex flex-col text-center p-3">
                  <h3 className=" font-bold">{project?.title}</h3>
                  <h4 className=" font-light tracking-widest text-xs">
                    {project?.place}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
