"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Container from "./container";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoPutih, LogoHitam } from "./logo";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MENU } from "@/lib/constant";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { EmojiSad, Warning2 } from "iconsax-react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  // Locale
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  // const localeAlert =

  // Hooks
  const pathname = usePathname();
  const actualPathName = useMemo<string>(() => {
    const arrPathname = pathname.split("/");
    arrPathname.splice(0, 2);
    return `/${arrPathname.join("/")}`;
  }, [pathname]);
  const scrollPosition = useScrollPosition();

  // State
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "linear",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "linear",
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.5 },
      },
    }),
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
          "  w-full z-50 bg-transparent text-white fixed items-center transition-all transform duration-500",
          {
            "bg-black transition-all transform duration-500":
              actualPathName !== "/",
          },
          {
            "bg-black transition-all transform duration-500":
              scrollPosition > 100,
          }
        )}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              className="fixed right-0 z-[49] h-screen w-full lg:w-[480px] origin-right items-center justify-center bg-white flex"
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className=" absolute top-0 left-0 py-4 md:px-24 sm:px-12 px-4 lg:hidden">
                <LogoHitam />
              </div>
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
                          " group relative text-[36px] font-semibold leading-tight text-black perspective-origin-bottom-left perspective-200"
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
              <LogoPutih />
            </div>
            <div className=" pr-5 flex gap-2.5">
              <AlertDialog>
                <h3
                  className={cn(" text-neutral-500 cursor-pointer", {
                    "text-white": currentLocale === "en",
                  })}
                  onClick={() => changeLocale("en")}
                >
                  EN
                </h3>
                <span>/</span>
                <AlertDialogTrigger asChild>
                  <h3
                    className={cn(" text-neutral-500 cursor-not-allowed", {
                      "text-white": currentLocale === "id",
                    })}
                    // onClick={() => changeLocale("id")}
                  >
                    ID
                  </h3>
                </AlertDialogTrigger>
                <AlertDialogContent className=" flex flex-col items-center justify-center">
                  <AlertDialogHeader>
                    <AlertDialogTitle className=" flex items-center justify-center pb-2">
                      {/* <Warning2 size="96" color="#333333" variant="TwoTone" /> */}
                      <EmojiSad size="96" color="#333333" variant="TwoTone" />
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Unfortunately this feature aren&apos;t available :(
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
