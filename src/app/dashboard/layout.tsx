"use client";

import LenisScroll from "@/components/lennis-scroll";
import { usePathname } from "next/navigation";
import HeaderDashboard from "@/components/dashboard/sidenav";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "@/components/ui/sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <NextUIProvider>
      <LenisScroll>
        <div className=" flex min-h-screen h-screen w-full ">
          <HeaderDashboard />
          <main className=" w-full flex">{children}</main>
          {/* <Footer /> */}
        </div>
        <Toaster />
      </LenisScroll>
    </NextUIProvider>
  );
}
