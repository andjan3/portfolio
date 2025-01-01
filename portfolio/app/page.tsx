"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import kasi from "../app/assets/kasi_hero.jpg";
import pl from "../app/assets/Mask Group 6.png";
import { Project } from "@/components/lib/projects/projects";
import { Hero } from "../components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <main className="min-h-screen w-[100vw] h-[100vh] p-16 ">
        <h3 className="font-text pb-8">PROJECTS</h3>
        <section className=" flex items-center">
          <Project
            href={"/kasi"}
            img={true}
            imageSrc={kasi}
            heading="Kasi"
            description="Web"
          />

          <Project
            href={"/premierpadel"}
            img={false}
            videoSrc={
              "https://premierpadeltravel.se/wp-content/uploads/2024/03/PPT-utan-logga.mp4"
            }
            heading="Premier padel travel"
            description="Web"
          />

          <Project
            href={"#"}
            img={true}
            imageSrc={pl}
            heading="Peter Liljeroth"
            description="Web"
          />
        </section>

        {/* <div className="absolute top-[38rem] right-[32rem] w-[50%] h-[50%]">
        <DotLottieReact
          src="https://lottie.host/74e40dfd-d6ff-405a-b45c-fb9be16eb819/VFpuJ5DiXA.lottie"
          loop
          autoplay
        />
      </div> */}
      </main>
    </>
  );
}
