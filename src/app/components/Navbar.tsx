import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarButtonParameters {
  // Link of the button
  buttonLink: string;
  // Text of the button
  buttonName: string;
}

function NavbarButton({ buttonLink, buttonName }: NavbarButtonParameters) {
  return (
    <div>
      <Link
        className="z-20 flex-1 text-sm text-white font-bold"
        href={buttonLink}
      >
        <motion.div
          className="z-10 bg-neutral-900 px-5 py-2 rounded-xl border border-gray-400"
          whileTap={{ scale: 0.9 }}
          initial={{ backgroundColor: "#262626" }}
          whileHover={{ backgroundColor: "#171717" }}
          animate={{ backgroundColor: "#262626" }}
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
    <div className="z-0 p-2 bg-black rounded-2xl flex justify-center items-center gap-x-2 w-fit place-self-center border border-gray-400">
      <NavbarButton buttonLink="/" buttonName="Home"></NavbarButton>
      <NavbarButton buttonLink="/aboutMe" buttonName="About me"></NavbarButton>
      <NavbarButton buttonLink="/work" buttonName="Work"></NavbarButton>
      <NavbarButton buttonLink="/projects" buttonName="Projects"></NavbarButton>
      <NavbarButton buttonLink="/gallery" buttonName="Gallery"></NavbarButton>
      <NavbarButton buttonLink="/contact" buttonName="Contact"></NavbarButton>
    </div>
  );
};

export default Navbar;
