import { ReactNode } from "react";
import Image from "next/image";
import React from "react";
import Container from "@/components/container";
import Hero from "@/components/home/hero";
import Link from "next/link";
import { Element } from "react-scroll";
import HomeContact from "@/components/home/home-contact";

interface HomeLayoutProps {
  children: ReactNode;
  project: ReactNode;
}

export default function HomeLayout({ project, children }: HomeLayoutProps) {
  return (
    <>
      <Hero />
      <Container>
        {children}
        {project}
        <HomeContact />
        {/* {children} */}
      </Container>
    </>
  );
}
