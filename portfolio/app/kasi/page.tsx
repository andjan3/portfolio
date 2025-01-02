import { ProjectHero } from "../../components/projectHero";
import kasi from "../../app/assets/img/kasi-desktop.png";
import kasiBuilding from "../../app/assets/img/kasi_buildings.png";
import group from "../../app/assets/img/kasiiii.png";
import Image from "next/image";
import { SkillsList } from "../../components/lib/projects/skills";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const KasiPage = () => {
  return (
    <div>
      <div className="lg:h-[100vh] flex flex-col justify-center">
        <ProjectHero imageSrc={kasi} />
        <div className="p-6 lg:p-10">
          <h1 className="font-heading">Internship project</h1>
          <p className="font-paragraph">Website, next.js & storyblok</p>
        </div>
      </div>

      <div className="block lg:flex px-6 lg:px-10 lg:h-[100vh]">
        <div className="flex flex-col flex-nowrap justify-end lg:block w-[100%] lg:w-1/2">
          <h2 className="project-heading">Kasi AB</h2>
          <p className="pb-4 lg:pb-0">Webb</p>
        </div>
        <div className=" lg:w-1/2 flex flex-col gap-4">
          <p className="font-text ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            aliquam reprehenderit consequuntur iure repellendus repellat
            laboriosam quae, soluta accusamus ullam tempora nulla dolorum
            distinctio eum molestiae, porro culpa enim placeat maxime! Corporis
            laboriosam eligendi, vero optio dolorem ipsam nisi consequuntur. Ab
            nulla inventore ipsam repellendus ipsa dolores, omnis soluta
            dolorum.
          </p>
          <p className="font-text ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            aliquam reprehenderit consequuntur iure repellendus repellat
            laboriosam quae, soluta accusamus ullam tempora nulla dolorum
            distinctio eum molestiae, porro culpa enim placeat maxime! Corporis
            laboriosam eligendi, vero optio dolorem ipsam nisi consequuntur. Ab
            nulla inventore ipsam repellendus ipsa dolores, omnis soluta
            dolorum.
          </p>
          <SkillsList skills={["Storyblok", "Next.js", "Tailwind", "SCSS"]} />
          <div className="flex justify-end">
            <div>
              <Link
                href="https://www.kasi.se/"
                className="underline flex items-center"
              >
                View live
                <IoIosArrowRoundForward className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-6 lg:gap-0 flex-col lg:flex-row lg:justify-evenly p-8 ">
        <div className="lg:w-[45%] ">
          <Image src={group} alt="" className="w-full h-full object-cover " />
        </div>
        <div className="lg:w-[45%]">
          <Image
            src={kasiBuilding}
            alt="Kasi Building"
            className="w-full h-full object-cover rounded-[20px] lg:rounded-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default KasiPage;
