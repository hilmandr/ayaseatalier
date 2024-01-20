"use client";
import React from "react";
import Link from "next/link";
import Container from "./container";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MENU } from "@/lib/constant";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
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

  const pathname = usePathname();
  const scrollPosition = useScrollPosition();

  const menuVars: Variants = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars: Variants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  const navVars: Variants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <div
        className={cn(
          "  w-full z-50 bg-black text-white fixed items-center",
          {
            "bg-transparent transition-all transform duration-200":
              pathname == "/",
          },
          {
            "bg-black transition-all transform duration-200":
              scrollPosition > 775,
          }
        )}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              className="fixed right-0 z-[49] hidden h-screen w-full lg:w-[480px] origin-right items-center justify-center bg-white lg:flex"
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                variants={navVars}
                initial="initial"
                animate="open"
                exit="initial"
                className=" flex flex-col gap-4"
              >
                {MENU.map((menu, i) => (
                  <div className=" overflow-hidden" key={i}>
                    <motion.div variants={mobileLinkVars}>
                      <Link
                        href={menu.path}
                        className={cn(
                          " group relative text-[36px] leading-tight text-black"
                        )}
                      >
                        {menu.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
