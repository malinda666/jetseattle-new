import { useAtom, atom } from "jotai";

const scrollAtom = atom({ value: 0, velo: 0, dir: 1 });

export function useScroll() {
  const [scroll, setScroll] = useAtom(scrollAtom);

  const updateScroll = (e: { value: number; velo: number; dir: number }) => {
    setScroll(e);
  };

  return {
    scroll,
    updateScroll,
  };
}
