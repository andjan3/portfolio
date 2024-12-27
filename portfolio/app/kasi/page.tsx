/* import { ProjectHero } from "../../components/projectHero";
import kasi from "../../app/assets/newKasi.png";
import kasiBuilding from "../../app/assets/kasi_buildings.png";
import kasiMobile from "../../app/assets/kasi_phone.png";
import kasiIpad from "../../app/assets/kasi_ipaad.png";
import Image from "next/image";
import { SkillsList } from "../../components/lib/projects/skills";
import { TbBrandGithub } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const KasiPage = () => {
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-center">
        <ProjectHero imageSrc={kasi} />
        <div className="p-10">
          <h1 className="font-heading">Kasi AB</h1>
          <p className="font-paragraph">Website, next.js & storyblok</p>
        </div>
      </div>
      <div className="grid-container">
        <div className="box box-1 p-28">
          <h2 className="font-heading">Ruta 1</h2>
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
        <div className="box box-2">
          <div className="inner-box flex justify-center">
            <Image src={kasiMobile} width={160} alt="" className="p-2" />
          </div>
          <div className="p-12 mt-4">
            <Image src={kasiIpad} alt="" />
          </div>
        </div>
        <div className="box box-3">
          <Image
            src={kasiBuilding}
            alt="Kasi Building"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default KasiPage;
 */

import { ProjectHero } from "../../components/projectHero";
import kasi from "../../app/assets/kasi-desktop.png";
import kasiBuilding from "../../app/assets/kasi_buildings.png";
import group from "../../app/assets/group_ipad_mobile.png";
import Image from "next/image";
import { SkillsList } from "../../components/lib/projects/skills";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const KasiPage = () => {
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-center">
        <ProjectHero imageSrc={kasi} />
        <div className="p-10">
          <h1 className="font-heading">Internship project</h1>
          <p className="font-paragraph">Website, next.js & storyblok</p>
        </div>
      </div>

      <div className="flex p-10 h-[100vh]">
        <div className="w-1/2">
          <h2 className="big-heading">Kasi AB</h2>
          <p className="pl-2">Webb</p>
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
      <div className="flex w-full justify-center gap-20">
        <div className="w-[35%]">
          <Image
            src={group}
            alt=""
            className="w-full h-full object-cover p-2"
          />
        </div>
        <div className="w-[35%]">
          <Image
            src={kasiBuilding}
            alt="Kasi Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default KasiPage;
