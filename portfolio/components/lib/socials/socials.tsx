import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

export const Socials = () => {
  return (
    <>
      <Link
        href={"https://se.linkedin.com/in/andr%C3%A9a-jandergren-66a907290"}
        target="_blank"
      >
        <FaLinkedinIn fontSize={30} color="white" />
      </Link>

      <Link href={"https://github.com/andjan3"} target="_blank">
        <TbBrandGithub fontSize={30} color="white" />
      </Link>
    </>
  );
};
