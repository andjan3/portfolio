"use client";

import useStore from "../lib/store";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { Socials } from "../lib/socials/socials";

export const NavBar = () => {
  const { open, setIsOpenMenu, rotateHamburger, setRotateHamburger } =
    useStore();

  const handleCloseClick = () => {
    setIsOpenMenu(false);
    setRotateHamburger(true);
    setTimeout(() => {
      setRotateHamburger(false);
    }, 500);
  };

  return (
    <header
      className={`fixed px-5 top-0 flex justify-between items-center w-full py-5 z-50`}
    >
      <span className="font-logo text-3xl">Andréa Jandergren.</span>
      <div className="flex justify-end absolute right-5 top-2">
        <RxHamburgerMenu
          fontSize={50}
          className={`${
            open ? "hidden" : "block"
          } text-black cursor-pointer transform transition-all duration-500`}
          style={{
            transform: rotateHamburger ? "rotate(180deg)" : "rotate(0deg)",
          }}
          onClick={() => setIsOpenMenu(true)}
        />
        <nav
          className={`bg-[#212121] w-[100vw] h-[100vh] lg:w-[32vw] lg:h-[100vh] absolute -top-2 -right-5 lg:-top-2 lg:-right-5 transition-all duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-8 lg:px-4 lg:pt-4 pt-8">
            <IoCloseOutline
              fontSize={70}
              color="white"
              className={`cursor-pointer transform transition-all duration-1000 ease-in-out  ${
                open ? "rotate-[360deg]" : "rotate-0"
              }`}
              onClick={handleCloseClick}
            />
          </div>

          <div className="flex flex-col pl-8 lg:pl-16 pt-16 gap-3">
            <Link
              className="text-[24px] lg:text-[40px] text-white"
              href={"#"}
              onClick={handleCloseClick}
            >
              Home
            </Link>
            <Link
              className="text-[24px] lg:text-[40px] text-white"
              href={"#"}
              onClick={handleCloseClick}
            >
              About
            </Link>
            <Link
              className="text-[24px] lg:text-[40px] text-white"
              href={"#projects"}
              onClick={handleCloseClick}
            >
              Projects
            </Link>
            <Link
              className="text-[24px] lg:text-[40px] text-white"
              href={"#footer"}
              onClick={handleCloseClick}
            >
              Contact
            </Link>
          </div>

          <div className="flex justify-center mt-14 lg:mt-32">
            <hr className="w-[80%] color-black opacity-20 border-t-4" />
          </div>

          <div className="flex px-8 lg:px-16 gap-5 items-center pt-8">
            <Socials />
          </div>
        </nav>
      </div>
    </header>
  );
};
