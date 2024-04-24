"use client";
import Link from "next/link";
import { Element } from "react-scroll";

import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProject() {
  return (
    <>
      <Element name="project">
        <div className=" flex">
          <div className=" flex w-full items-center justify-between">
            <h1 className=" text-5xl font-normal capitalize">WORKS</h1>
            <Link
              href="/projects"
              className=" border border-stone-800 rounded-full py-2 px-5 text-sm text-stone-900 bg-white hover:bg-black hover:text-white transition-all duration-100"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 pt-5 gap-x-10 gap-y-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className=" flex flex-col group">
              <Skeleton className=" flex w-full aspect-video relative" />
              <div className=" flex w-full flex-col items-center justify-center gap-2 mt-2">
                <Skeleton className=" h-5 w-[300px]" />
                <Skeleton className=" h-5 w-[150px]" />
              </div>
            </div>
          ))}
        </div>
      </Element>
    </>
  );
}
