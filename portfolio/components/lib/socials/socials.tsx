import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

export const Socials = () => {
  return (
    <>
      <Link href={"#"}>
        <FaLinkedinIn fontSize={30} color="white" />
      </Link>

      <Link href={"#"}>
        <TbBrandGithub fontSize={30} color="white" />
      </Link>
    </>
  );
};
