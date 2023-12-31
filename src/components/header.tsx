"use client";
import React from "react";
import Link from "next/link";
import Container from "./container";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { IMenu } from "@/types";
import { AnimatePresence, Variant, Variants, motion } from "framer-motion";
import { perspective, slideIn, wrap } from "@/anim/nav";
import useOpenMenu from "@/hooks/open-menu";
import { set } from "date-fns";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuBlock: Variants = {
    initial: {
      transition: {
        duration: 100,
        delay: 100,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // const { isOpen, onOpen, onClose } = useOpenMenu();
  // const toggleMenuOpen = () => {
  //   if (isOpen) {
  //     onClose();
  //     document.body.style.overflow = "";
  //   } else {
  //     onOpen();
  //     document.body.style.overflow = "hidden";
  //   }
  // };
  return (
    <>
      <div className="  w-full z-50 bg-black text-white fixed items-center">
        <motion.div
          variants={menuBlock}
          initial="initial"
          exit="initial"
          className={cn(
            " transform transition-all duration-200 flex flex-col lg:w-[35%] w-full h-[100vh] items-center justify-center bg-white absolute right-0 gap-6 -mr-[520px] delay-100",
            {
              " transform transition-all duration-200 mr-[0] delay-75": isOpen,
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
        </motion.div>

        <Container>
          <div className=" flex items-center py-4 justify-between">
            <div className=" flex flex-1">
              <Logo />
            </div>

            <div className=" flex flex-row items-center gap-3 cursor-pointer relative">
              <button
                className={cn(
                  " flex flex-col z-50 w-12 h-12 rounded-full bg-white cursor-pointer items-center justify-center border border-stone-900"
                )}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={cn(
                    " block h-[2px] w-[40%] m-auto bg-black relative transform transition-all duration-200",
                    {
                      "rotate-45 top-[4px] transform transition-all duration-200":
                        isOpen,
                    }
                  )}
                ></div>
                <div
                  className={cn(
                    " block h-[2px] w-[40%] m-auto bg-black relative transform transition-all duration-200 -mt-4",
                    {
                      "-rotate-45 -top-[1px] transform transition-all duration-200":
                        isOpen,
                    }
                  )}
                ></div>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
