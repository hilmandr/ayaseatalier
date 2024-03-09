import Link from "next/link";
import { LogoHitam } from "../logo";
import { MENU_DASHBOARD } from "@/lib/constant";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <>
      <div className=" flex flex-col w-[20%] min-h-screen bg-slate-50 overflow-hidden z-20">
        <div className=" flex w-full h-24 items-center justify-center ">
          <LogoHitam />
        </div>
        <div className=" flex flex-col pr-4 py-4 text-stone-900 gap-2">
          {MENU_DASHBOARD.map((menu, i) => (
            <div className="" key={i}>
              <Link href={menu.path} className=" text-sm text-white">
                <div
                  className={cn(
                    " flex w-full items-center gap-6 p-5 pl-8 rounded-r-full duration-300 transform transition-all bg-slate-50 hover:bg-[#162479] hover:text-slate-50 text-slate-900",
                    {
                      "bg-[#162479] text-slate-50":
                        pathname.split("/")[2] == menu.path.split("/")[2],
                    }
                  )}
                >
                  <menu.icon size={25} variant="Bold" />
                  <h2>{menu.label}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <div className=" flex w-full h-16 bg-slate-400 fixed z-10"></div> */}
    </>
  );
}
