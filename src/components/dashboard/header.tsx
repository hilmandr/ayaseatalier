"use client";
import { format } from "date-fns";
import { RxCaretDown } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className=" flex w-full items-center justify-between pt-5">
        <div className=" flex flex-col">
          <h1 className=" font-bold text-lg">DASHBOARD</h1>
          <p>{format(new Date(), "iiii, dd MMM yyyy")}</p>
        </div>
        <div className=" flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className=" flex w-full items-center">
              <div className=" flex w-10 h-10 bg-black items-center justify-center">
                <h1 className=" text-white">
                  <Image
                    src="/image/dashboard/profiel.jpeg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </h1>
              </div>
              <RxCaretDown size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent side={"bottom"} align="end">
              <DropdownMenuLabel>Btari Larasati</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut()}
                className=" cursor-pointer"
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
