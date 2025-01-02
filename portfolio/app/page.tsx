"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import kasi from "../app/assets/img/kasi_hero.jpg";
import pl from "../app/assets/img/Mask Group 6.png";
import { Project } from "@/components/lib/projects/projects";
import { Hero } from "../components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <main id="projects" className="w-[100vw] lg:h-[100vh] p-6 lg:p-16 ">
        <h3 className="font-text pb-8">PROJECTS</h3>
        <section className="flex flex-col lg:flex-row lg:items-center">
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
    </div>
  );
}
