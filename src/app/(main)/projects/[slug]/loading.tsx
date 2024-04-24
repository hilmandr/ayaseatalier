import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingProjectDetail = () => {
  return (
    <>
      <div className=" w-full flex items-center">
        <Skeleton className=" w-full h-[700px]" />
        <div className=" flex flex-col gap-5 absolute ml-20">
          <Skeleton className=" lg:w-[560px] md:w-[380px] sm:w-[280px] h-16" />
          <Skeleton className=" lg:w-[360px] md:w-[140px] sm:w-[140px] h-16" />
          <div className=" flex flex-col gap-3">
            <Skeleton className=" lg:w-[760px] md:w-[270px] sm:w-[270px] h-5" />
            <Skeleton className=" lg:w-[760px] md:w-[270px] sm:w-[270px] h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingProjectDetail;
