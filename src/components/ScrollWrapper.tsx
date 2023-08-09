"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import { useScroll } from "@/store/RootStore";

export const ScrollWrapper = () => {
  const { updateScroll } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e: any) => {
      updateScroll({
        value: e.animatedScroll,
        velo: e.velocity,
        dir: e.direction,
      });
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};
