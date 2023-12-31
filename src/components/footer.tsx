import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="  bg-black w-full text-white">
      <div className=" container mx-auto px-14 items-center justify-between py-10 grid grid-cols-3 w-full">
        <div className=" flex flex-col gap-2">
          <h1 className=" font-semibold text-sm tracking-widest">SITE MAP</h1>
          <Link href="/about">
            <p className=" text-sm font-light">About</p>
          </Link>
          <Link href="/projects">
            <p className=" text-sm font-light">Works</p>
          </Link>
        </div>
        <div className=" w-full flex justify-center h-11 relative">
          <Link href="/">
            <Image
              src="/image/brandmark putih-01.png"
              alt=""
              // fill
              width={110}
              height={110}
              className=" object-cover object-center relative"
            ></Image>
          </Link>
        </div>
        <div className=" flex flex-col gap-2 text-right">
          <h1 className=" font-semibold text-sm tracking-widest">CONTACT</h1>
          <p className=" text-sm font-light">+62 812 3456 7890</p>
          <p className=" text-sm font-light">ayaseatalier@gmail.com</p>
          <h1 className=" font-semibold text-sm tracking-widest">INSTAGRAM</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
