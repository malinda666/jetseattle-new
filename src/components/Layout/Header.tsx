"use client";

import { FC } from "react";
import { useScroll } from "@/store/RootStore";

const Header: FC = () => {
  const { scroll } = useScroll();

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-3">
      <div className="">
        <span className="text-white">
          header {scroll.value}, {scroll.dir}, {scroll.velo}
        </span>
      </div>
    </header>
  );
};

export default Header;
