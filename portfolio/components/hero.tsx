import Image from "next/image";
import andrea from "../app/assets/img/andreaHero2.png";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatedHeroText } from "./lib/animations/heroText";

export const Hero = () => {
  return (
    <div className="flex items-center justify-around hero lg:h-[100vh] flex-wrap p-10">
      <div className="w-[100%] lg:w-[40%] flex flex-col">
        <div className="w-[350px] h-[350px] right-16 relative m-10 lg:hidden">
          <Image src={andrea} alt="" layout="fill" objectFit="contain" />
        </div>
        <AnimatedHeroText />
        <div className="flex gap-4 mt-4">
          <Link
            href={"#footer"}
            className="bg-[#FF8233]  font-button text-center text-white p-3 rounded w-[50%] lg:w-[22%]"
          >
            Contact
          </Link>

          <Link
            href="/documents/CV.png"
            target="_blank"
            className="border border-[#FF8233] text-[#FF8233]  text-center font-button p-3 rounded w-[50%] lg:w-[22%]"
          >
            Download CV
          </Link>
        </div>
      </div>

      <div className="hidden w-[350px] h-[350px] lg:flex relative m-10 ">
        <Image src={andrea} alt="" layout="fill" objectFit="contain" />
      </div>

      <div className="mt-16 lg:mt-0 flex justify-center w-[100vw]">
        <IoIosArrowDown className="bounce text-[#FF8233] text-3xl" />
      </div>
    </div>
  );
};
