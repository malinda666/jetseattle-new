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
    <motion.header
      initial={false}
      animate={{
        y: hideNavbar ? -100 : 0,
        transition: {
          ease: "easeOut",
        },
      }}
      className="fixed top-0 left-0 w-full px-6 py-3 flex items-center justify-between z-top"
    >
      <div className="">
        <span className="">logo</span>
      </div>
      <div className="px-6 py-2 rounded-lg glass">
        <span className="text-black">
          header {scroll.value.toFixed()}, {scroll.dir},{" "}
          {scroll.velo.toFixed(0)}
        </span>
      </div>
    </motion.header>
  );
};

export default Header;
