"use client";
import React from "react";
import Link from "next/link";
import { PiArrowCircleDownThin } from "react-icons/pi";
import { Link as LinkRS } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className=" bg-[url('/image/hero.jpg')] bg-center bg-cover w-full h-[100dvh] relative z-10">
        <div className="bg-black w-full h-full absolute -z-10 bg-opacity-50">
          {/* <Container> */}
          <div className=" flex flex-col md:flex w-full h-full container mx-auto px-5 lg:px-8 text-white z-0 justify-center relative">
            <div className="  grid grid-cols-5">
              <div className="  grid col-span-3">
                <h1 className=" lg:text-6xl md:text-4xl text-4xl font-semibold lg:leading-tight">
                  We Help You To Bring Your Dream Building.
                </h1>
                <Link
                  href="/projects"
                  className=" w-48 bg-transparent py-4 px-6 border border-white text-center rounded-full mt-4 hover:bg-white hover:text-black transition-all duration-200"
                >
                  Discover Projects
                </Link>
              </div>
            </div>

            <div className=" absolute left-1/2 -translate-x-1/2 bottom-10">
              <LinkRS
                to="project"
                spy={true}
                smooth="easeInOutQuart"
                offset={-100}
                duration={2000}
              >
                <PiArrowCircleDownThin
                  className="relative cursor-pointer"
                  size={60}
                />
              </LinkRS>
            </div>
          </div>
          {/* </Container> */}
        </div>
      </div>
    </>
  );
}
