"use client";

import HeaderDashboard from "@/components/dashboard/sidenav";
import { Toaster } from "@/components/ui/sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex min-h-screen h-screen w-full ">
        <HeaderDashboard />
        <main className=" flex w-[calc(100%-286px)] ml-[286px]">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
      <Toaster />
    </>
  );
}
