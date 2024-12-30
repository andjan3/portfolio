import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  href: string;
  img: boolean;
  imageSrc?: string | { src: string };
  videoSrc?: string | { src: string };
  heading: string;
  description: string;
  skills?: string[];
}

export const Project = ({
  href,
  img,
  imageSrc,
  videoSrc,
  heading,
  description,
}: ProjectProps) => {
  const imagePath =
    typeof imageSrc === "string"
      ? imageSrc
      : imageSrc?.src ?? "/fallback-image.jpg";
  const videoPath =
    typeof videoSrc === "string"
      ? videoSrc
      : videoSrc?.src ?? "/fallback-image.jpg";
  return (
    <>
      <Link href={href}>
        {img ? (
          <div className="relative w-[450px] h-[450px] group">
            <Image src={imagePath} layout="fill" objectFit="cover" alt="" />
            <div className="absolute inset-0 bg-[#25364f] opacity-0 group-hover:opacity-30 z-10 transition-opacity duration-300"></div>
            <div className="absolute top-80 text-white p-4 z-20">
              <h1 className="text-3xl font-heading">{heading}</h1>
              <p className="pt-2 font-paragraph">{description}</p>
            </div>
          </div>
        ) : (
          <div className="relative w-[450px] h-[450px] group">
            <div className="absolute inset-0 bg-[#25364f] opacity-0 group-hover:opacity-30 z-10 transition-opacity duration-300"></div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src={videoPath}
            ></video>
            <div className="absolute top-80 text-white p-4 z-20">
              <h1 className="text-3xl font-heading">{heading}</h1>
              <p className="pt-2 font-paragraph">{description}</p>
            </div>
          </div>
        )}
      </Link>
    </>
  );
};
