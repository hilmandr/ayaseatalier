import Container from "../../../../components/container";
import InputProject from "../../../../components/dashboard/input-project";
import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";
import React from "react";
import Header from "../../../../components/dashboard/header";

export default function InputProjectPage() {
  return (
    <>
      <div className=" flex w-full h-full bg-white text-sm">
        <Container>
          <Header />
          <div className=" flex flex-col w-full pt-8">
            <div className=" flex w-full items-center">
              <Link href="">
                <p className=" font-bold">Dashboard</p>
              </Link>
              <RxCaretRight />
              <Link href="/dashboard/projects">
                <p className=" font-bold">Projects</p>
              </Link>
              <RxCaretRight />
              <p>Input Project</p>
            </div>
            <InputProject />
          </div>
        </Container>
      </div>
    </>
  );
}
