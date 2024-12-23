"use client";
import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa6";
import { Form } from "../form/form";
import { Socials } from "../lib/socials/socials";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col lg:min-h-screen bg-[#24272D] pb-[2rem] md:pb-[3rem] mt-[2rem] md:mt-[2rem]"
    >
      <div className="gridContainer pr-[1rem] pl-[1rem] grid grid-cols-1 md:grid-cols-2 lg:h-[100vh] md:p-[2rem] lg:p-[5rem] flex-grow">
        {/* Kontaktinformation */}
        <div className="wrapper">
          <div className="p-[1rem] md:p-[0rem}">
            <div className="lg:w-[60%]">
              <h1 className="text-white text-3xl mb-[1rem]">Let's connect</h1>

              <div className="smallerFont mb-[2rem] text-white">
                <p>
                  If you ever want to grab a coffee or just want a quick chat -
                  you can find me on social media or you can send me a message
                  here!
                </p>
              </div>

              <div className="flex gap-5">
                <Socials />
              </div>
            </div>
          </div>
        </div>

        {/* Formulär */}
        <div className="wrapper">
          <Form />
        </div>
      </div>

      {/* Copyright */}
      <div className=" wrapper smallerFont md:mediumFont ml-[25px] lg:ml-[80px]">
        <div className="text-white">© Copyright 2025 | Andréa Jandergren </div>
      </div>
    </footer>
  );
};
