import { cn } from "@/lib/utils";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lennis-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayase Atalier",
  metadataBase: new URL("https://ayaseatalier.vercel.app/"),
  description: "Hi, i'm Btari Larasati Kirana. I'm a Architec.",
  icons: "/image/icon-white.png",
  creator: "Btari Larasati Kirana",
  publisher: "Btari Larasati Kirana",
  openGraph: {
    title: "Ayase Atalier",
    description: "Hi, i'm Btari Larasati Kirana. I'm a Architec.",
    images: ["/image/banner-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/image/banner-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisScroll>
      <html lang="en" className=" font-['Inter Tight']">
        <body className={inter.className}>{children}</body>
      </html>
    </LenisScroll>
  );
}
