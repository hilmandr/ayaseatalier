import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { MENU } from "@/lib/constant";

const Footer = () => {
  return (
    <>
      <div className=" flex items-center bg-black w-full text-white text-base overflow-hidden">
        <Container>
          <div className=" flex gap-10 py-14 w-full">
            <div className=" flex flex-col gap-2">
              <h1 className=" font-semibold tracking-widest">SITE MAP</h1>
              {MENU.map((menu, i) => (
                <Link href={menu.path} className="" key={i}>
                  {menu.label}
                </Link>
              ))}
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" font-semibold tracking-widest">CONTACT</h1>
              <p className=" font-light">+62 812 3456 7890</p>
              <p className=" font-light">ayaseatalier@gmail.com</p>
              <Link href="">
                <h1 className=" font-semibold tracking-widest">INSTAGRAM</h1>
              </Link>
            </div>
          </div>
          <div className=" flex w-full justify-between pb-5 items-center">
            <p className=" font-light">
              Copyright &copy; ayaseatalier.com 2023.
            </p>

            <div className="">
              <div className=" flex w-20 h-10">
                <Link href="/" className=" w-full relative">
                  <Image
                    src="/image/logogram putih-01.png"
                    alt=""
                    fill
                    className=" object-cover object-center"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
