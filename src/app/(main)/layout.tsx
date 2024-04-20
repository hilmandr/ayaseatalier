"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <div className=" flex min-h-screen w-full flex-col">
        <main className=" w-full flex-1">{children}</main>
        <Footer />
        <Toaster />
      </div>
    </Providers>
  );
}
