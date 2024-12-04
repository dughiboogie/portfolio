import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import HomeIcon from "../icons/homeIcon";

interface NavbarButtonParameters {
  // Link of the button
  buttonLink: string;
  // Text of the button
  buttonName: string;
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
    <div className="flex">
      <Link
        className="z-20 flex-1 text-sm text-white font-bold"
        href={buttonLink}
      >
        <motion.div
          className="z-10 bg-neutral-900 px-5 py-2 rounded-xl border border-gray-400"
          whileTap={{ scale: 0.9 }}
          initial={{ backgroundColor: "#000000", borderColor: "#000000" }}
          whileHover={{ backgroundColor: "#262626", borderColor: "#9ca3af" }}
          animate={{ backgroundColor: "#000000", borderColor: "#000000" }}
          transition={{ type: "tween", ease: "easeOut" }}
        >
          {buttonName}
        </motion.div>
      </Link>
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-tea-green"
      >
        <div className="z-0 p-2 bg-black rounded-2xl flex justify-center items-center gap-x-2 w-fit place-self-center border border-gray-400">
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
          <NavbarButton
            buttonLink="/gallery"
            buttonName="Gallery"
          ></NavbarButton>
          <NavbarButton
            buttonLink="/contact"
            buttonName="Contact"
          ></NavbarButton>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
