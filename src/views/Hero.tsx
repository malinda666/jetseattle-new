import { FC } from "react";
import Image from "next/image";
import HeroBG from "../../public/images/sl4.webp";

const Hero: FC = () => {
  return (
    <div className="">
      <Image
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
          backgroundPosition: "bottom",
        }}
      />
    </div>
  );
};

export default Hero;
