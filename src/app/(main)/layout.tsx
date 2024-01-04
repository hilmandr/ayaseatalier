"use client";

import Footer from "@/components/footer";
import LenisScroll from "@/components/lennis-scroll";
import Logo from "@/components/logo";
import Header from "@/components/header";
import { MENU } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <LenisScroll>
      <Header />
      <div className=" flex min-h-screen w-full flex-col">
        <main className=" w-full flex-1">{children}</main>
        <Footer />
      </div>
    </LenisScroll>
  );
}
