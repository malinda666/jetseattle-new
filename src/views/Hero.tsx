import { FC } from "react";
import Image from "next/image";
import HeroBG from "../../public/images/sl2.webp";

const Hero: FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* <Image
        src={HeroBG}
        alt="Picture of the hero"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          backgroundPosition: "center center",
        }}
      /> */}
      <video
        autoPlay
        loop
        muted
        className="w-auto h-full absolute inset-0"
        style={{
          transform: "scale(1.17)",
          objectFit: "cover",
        }}
      >
        <source src="/images/bg.mp4" />
      </video>
    </div>
  );
};

export default Hero;
