"use client";

import { FC, useMemo } from "react";
import { motion } from "framer-motion";

import { useScroll } from "@/store/RootStore";

const Header: FC = () => {
  const { scroll } = useScroll();

  const hideNavbar = useMemo(
    () => parseInt(scroll.value.toFixed()) >= 500 && scroll.dir > 0,
    [scroll]
  );

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-3 flex items-center justify-between z-top">
      <div className="">
        <span className="font-title font-bold uppercase">logo</span>
      </div>
      <motion.div
        initial={false}
        animate={{
          y: hideNavbar ? -100 : 0,
          transition: {
            ease: "easeOut",
          },
        }}
        className="px-6 py-2 rounded-lg glass"
      >
        <span className="text-black">
          header {scroll.value.toFixed()}, {scroll.dir},{" "}
          {scroll.velo.toFixed(0)}
        </span>
      </motion.div>
    </header>
  );
};

export default Header;
