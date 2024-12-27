import Image from "next/image";
import Link from "next/link";

interface heroProps {
  imageSrc: string | { src: string };
}

export const ProjectHero = ({ imageSrc }: heroProps) => {
  const imagePath = typeof imageSrc === "string" ? imageSrc : imageSrc.src;

  return (
    <div className="relative flex justify-center group">
      <Image src={imagePath} height={120} width={650} alt="" />
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[530px] h-[328px] bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 rounded-xl"></div>
      <div className="hidden group-hover:flex absolute top-44 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="https://www.kasi.se/" className="button">
          view live
        </Link>
        <Link href="https://github.com/bastakom/Kasi" className="button">
          github
        </Link>
      </div>
    </div>
  );
};
