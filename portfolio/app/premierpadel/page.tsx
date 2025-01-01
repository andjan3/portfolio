import { ProjectHero } from "../../components/projectHero";
import premierPadel from "../../app/assets/img/padel.png";
import group from "../../app/assets/img/padel-mobile.png";
import premierImg from "../../app/assets/img/padeel.webp";
import Image from "next/image";
import { SkillsList } from "../../components/lib/projects/skills";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const PremierPadelPage = () => {
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-center">
        <ProjectHero imageSrc={premierPadel} />
        <div className="p-10">
          <h1 className="font-heading">Internship project</h1>
          <p className="font-paragraph">Website, next.js & storyblok</p>
        </div>
      </div>

      <div className="flex p-10 h-[100vh]">
        <div className="w-1/2">
          <h2 className="big-heading">Premier padel travel</h2>
          <p className=" pl-2">Webb</p>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
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
              <Link href="#" className="underline flex items-center">
                View live
                <IoIosArrowRoundForward className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-evenly p-8 ">
        <div className="w-[45%] ">
          <Image src={group} alt="" className="w-full h-full object-cover " />
        </div>
        <div className="w-[45%]">
          <Image
            src={premierImg}
            alt="Kasi Building"
            className="w-full h-full object-cover rounded-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PremierPadelPage;
