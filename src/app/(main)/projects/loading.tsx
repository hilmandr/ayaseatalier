"use client";
import Container from "@/components/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProjectPage() {
  return (
    <>
      <Container>
        <div className=" flex pt-32 w-full items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Projects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 pt-5 gap-10 py-10">
          {[...Array(3)].map((i) => (
            <div className=" flex flex-col group" key={i}>
              <Skeleton className=" flex w-full aspect-video relative" />
              <div className=" flex w-full flex-col items-center justify-center gap-2 mt-2">
                <Skeleton className=" h-5 w-[300px]" />
                <Skeleton className=" h-5 w-[150px]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
