"use client";
import { perspective, wrap, slideIn } from "@/anim/nav";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import useOpenMenu from "@/hooks/open-menu";
import { AnimatePresence, motion } from "framer-motion";
import { IMenu } from "@/types";

export default function HamburgerNav() {
  const MENU: IMenu[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "",
    },
    {
      label: "Works",
      path: "/projects",
    },
    {
      label: "Contact",
      path: "/#contact",
    },
  ];
  const { isOpen, onClose } = useOpenMenu();
  const pathname = usePathname();
  const clear = () => {
    onClose();
    document.body.style.overflow = "";
  };
  useEffect(() => {
    clear();
  }, [pathname]);

  return (
    <div>
      {isOpen && (
        <div
          className={cn(
            "flex flex-col lg:w-[35%] w-full h-[100vh] items-center justify-center bg-orange-50 absolute right-0 top-0 bottom-0 gap-6 -mr-[520px]",
            {
              " transform transition-all duration-200 mr-0": isOpen,
            }
          )}
        >
          {/* <div className="  transform transition-all duration-300 flex flex-col lg:w-[35%] w-full h-[100vh] items-center justify-center bg-orange-50 absolute right-0 top-0 bottom-0 gap-6"> */}
          {MENU.map((menu, i) => (
            <div
              key={i}
              //   className=" flex flex-col"
              className=" flex flex-col w-full h-fit justify-start px-24 perspective-top perspective-400"
            >
              <Link
                href={menu.path}
                className=" text-3xl text-stone-900 font-semibold text-left perspective-[120px] perspective-bottom"
                key={i}
              >
                {menu.label}
              </Link>
            </div>
          ))}
          //{" "}
        </div>
      )}
    </div>
  );
}
