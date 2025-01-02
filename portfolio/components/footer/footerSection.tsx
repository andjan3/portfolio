"use client";
import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa6";
import { Form } from "../form/form";
import { Socials } from "../lib/socials/socials";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col lg:min-h-screen bg-[#24272D] pb-[2rem] md:pb-[3rem] lg:mt-[2rem] md:mt-[2rem]"
    >
      <div className="gridContainer pr-[1rem] pt-2 lg:pt-0 pl-[1rem] grid grid-cols-1 md:grid-cols-2 lg:h-[100vh] md:p-[2rem] lg:p-[5rem] flex-grow">
        {/* Kontaktinformation */}
        <div className="wrapper">
          <div className="p-[1rem] md:p-[0rem}">
            <div className="lg:w-[60%]">
              <h1 className="text-white font-heading mb-[1rem] text-center lg:text-start">
                Let's connect
              </h1>

              <div className="font-text text-white">
                <p>
                  If you ever want to grab a coffee or just want a quick chat -
                  you can find me on social media or you can send me a message
                  here!
                </p>
              </div>

              <div className="mt-6  flex  justify-center lg:justify-start gap-5">
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
      <div className=" wrapper smallerFont md:mediumFont flex justify-center pt-2 lg:pt-0 lg:justify-start lg:ml-[80px]">
        <div className="text-white">© Copyright 2025 | Andréa Jandergren </div>
      </div>
    </footer>
  );
};
