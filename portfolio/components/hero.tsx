import Image from "next/image";
import andrea from "../app/assets/andreaHero2.png";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatedHeroText } from "./lib/animations/heroText";

export const Hero = () => {
  return (
    <div className="flex items-center justify-around hero h-[100vh] flex-wrap p-10">
      <div className="w-[40%] flex flex-col">
        <AnimatedHeroText />
        <div className="flex gap-4 mt-4">
          <Link
            href={"#"}
            className="bg-[#FF8233]  font-button text-center text-white p-3 rounded w-[22%]"
          >
            Contact
          </Link>

          <Link
            href={"#"}
            className="border border-[#FF8233] text-[#FF8233]  text-center font-button p-3 rounded w-[22%]"
          >
            Download CV
          </Link>
        </div>
      </div>

      <div className="w-[350px] h-[350px] relative m-10 ">
        <Image src={andrea} alt="" layout="fill" objectFit="contain" />
      </div>

      <div className="flex justify-center w-[100vw]">
        <IoIosArrowDown className="bounce text-[#FF8233] text-3xl" />
      </div>
    </div>
  );
};
