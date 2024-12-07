import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import HomeIcon from "../icons/homeIcon";

interface NavbarButtonParameters {
  buttonLink: string; // Link of the button
  buttonName: string; // Text of the button
}

function NavbarButton({ buttonLink, buttonName }: NavbarButtonParameters) {
  /*
  function iconSwitch(buttonName: string) {
    switch (buttonName) {
      case "Home":
        return (
          <div>
            <HomeIcon></HomeIcon>;
          </div>
        );
      case "About me":
        return (
          <div className="flex-initial max-h-1">
            <HomeIcon></HomeIcon>;
          </div>
        );
      case "Work":
        return (
          <div className="flex-initial max-h-1">
            <HomeIcon></HomeIcon>;
          </div>
        );
      case "Projects":
        return (
          <div className="flex-initial max-h-1">
            <HomeIcon></HomeIcon>;
          </div>
        );
      case "Gallery":
        return (
          <div className="flex-initial max-h-1">
            <HomeIcon></HomeIcon>;
          </div>
        );
      case "Contact":
        return (
          <div className="flex-initial max-h-1">
            <HomeIcon></HomeIcon>;
          </div>
        );

      default:
        break;
    }
  }
  */

  // <div>{iconSwitch(buttonName)}</div>

  return (
    <Link
      className="z-20 flex md:text-base text-sm md:max-w-fit text-white"
      href={buttonLink}
    >
      <motion.div
        className="z-10 bg-neutral-900 md:px-5 px-2 py-2 rounded-xl border border-gray-400 font-semibold"
        whileTap={{ scale: 0.9 }}
        initial={{ backgroundColor: "#000000", borderColor: "#000000" }}
        whileHover={{ backgroundColor: "#262626", borderColor: "#9ca3af" }}
        animate={{ backgroundColor: "#000000", borderColor: "#000000" }}
        transition={{ type: "tween", ease: "easeOut" }}
      >
        {buttonName}
      </motion.div>
    </Link>
  );
}

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className=" z-50 fixed w-full h-fit md:top-4 bottom-20 flex justify-center"
    >
      {/* "z-0 p-2 bg-black rounded-2xl flex justify-center items-center gap-x-2  place-self-center border border-gray-400" */}

      {/* "fixed w-fit sm:top-0 bottom-0 bg-black z-50 flex justify-center items-center gap-x-2 p-3 border-t sm:border-t-0 sm:border-b border-gray-400" */}
      <div className="z-0 p-2 fixed bg-black bg-opacity-90 rounded-2xl flex md:gap-x-2 gap-x-0 border border-gray-400 ">
        <NavbarButton buttonLink="/" buttonName="Home"></NavbarButton>
        <NavbarButton
          buttonLink="/aboutMe"
          buttonName="About me"
        ></NavbarButton>
        <NavbarButton buttonLink="/work" buttonName="Work"></NavbarButton>
        <NavbarButton
          buttonLink="/projects"
          buttonName="Projects"
        ></NavbarButton>
        <NavbarButton buttonLink="/gallery" buttonName="Gallery"></NavbarButton>
        <NavbarButton buttonLink="/contact" buttonName="Contact"></NavbarButton>
      </div>
    </motion.div>
  );
};

export default Navbar;
