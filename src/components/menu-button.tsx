import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface ButtonProps {
  className?: string;
  onClick: string;
}
export default function Button({ className, onClick }: ButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={className}>
      <motion.div
        className={cn(
          " flex flex-col z-50 w-12 h-12 rounded-full bg-white cursor-pointer items-center justify-center "
        )}
        onClick={() => {
          setIsActive(!isActive);
        }}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={cn(
            " block h-[2px] w-[40%] m-auto bg-black relative transform transition-all duration-200",
            {
              "rotate-45 top-[4px] transform transition-all duration-200":
                isActive,
            }
          )}
        ></div>
        <div
          className={cn(
            " block h-[2px] w-[40%] m-auto bg-black relative transform transition-all duration-200 -mt-4",
            {
              "-rotate-45 -top-[2px] transform transition-all duration-200":
                isActive,
            }
          )}
        ></div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>

      <p>{label}</p>
    </div>
  );
}
