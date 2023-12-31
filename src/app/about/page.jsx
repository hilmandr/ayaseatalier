import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <Header />

      <div className=" flex">
        <div className=" w-full h-[600px] bg-cover bg-center bg-[url('/image/about-hero.jpg')]"></div>
      </div>

      <div className=" flex items-center w-full justify-center py-20 gap-5">
        <h1 className=" text-8xl font-semibold text-center">What is</h1>
        <h1 className=" text-8xl font-normal text-center">Ayase Atalier?</h1>
      </div>

      <div className=" container mx-auto flex-col w-full grid grid-cols-2 items-center justify-between pb-20">
        <div className=" flex w-full relative justify-center">
          <Image
            src="/image/brandmark hitam-01.png"
            alt=""
            width={300}
            height={100}
            className=""
          ></Image>
        </div>
        <div className=" w-full flex max-w-lg">
          <p className=" text-justify text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div></div>
        <div className=" w-full flex max-w-lg mt-10">
          <p className=" text-justify text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>

      <div className=" bg-black text-white">
        <div className=" flex items-center w-full justify-center py-20 gap-5">
          {/* <h1 className=" text-8xl font-semibold text-center">Our Team</h1> */}
          <h1 className=" text-8xl font-normal text-center">Our Team</h1>
        </div>
        <div className="container mx-auto px-20 flex-col w-full grid grid-cols-2 items-center justify-between">
          <div>
            <h1 className=" text-base font-semibold">Btari Larasati Kirana</h1>
            <span className=" text-xs font-normal align-top">Principal</span>
            <p className=" text-justify font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex w-full relative justify-end">
            <Image
              src="/image/our-team-01.jpeg"
              alt=""
              width={300}
              height={120}
              className=""
            ></Image>
          </div>
        </div>

        <div className="container mx-auto px-20 flex-col w-full grid grid-cols-2 items-center justify-between">
          <div className="flex w-full relative justify-start">
            <Image
              src="/image/our-team-01.jpeg"
              alt=""
              width={300}
              height={120}
              className=""
            ></Image>
          </div>
          <div>
            <h1 className=" text-base font-semibold">Btari Larasati Kirana</h1>
            <span className=" text-xs font-normal align-top">Principal</span>
            <p className=" text-justify font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
