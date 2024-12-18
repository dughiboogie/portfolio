import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarButtonParameters {
  buttonLink: string; // Link of the button
  buttonName: string; // Text of the button
  iconPath: string; // Path to the icon
}

function NavbarButton({
  buttonLink,
  buttonName,
  iconPath,
}: NavbarButtonParameters) {
  return (
    <div className="flex m-1">
      <Link
        className="z-20 flex md:text-base text-sm md:max-w-fit text-white"
        href={buttonLink}
      >
        <motion.div
          className="z-10 md:px-3 px-2 py-1 rounded-xl border border-gray-400 font-semibold flex items-center gap-2"
          whileTap={{ scale: 0.9 }}
          initial={{ backgroundColor: "#000000", borderColor: "#000000" }}
          whileHover={{ backgroundColor: "#262626", borderColor: "#9ca3af" }}
          animate={{ backgroundColor: "#000000", borderColor: "#000000" }}
          transition={{ type: "tween", ease: "easeOut" }}
        >
          <img src={iconPath} alt={`${buttonName} icon`} className="w-5 h-5" />
          <div className="md:flex hidden">{buttonName}</div>
        </motion.div>
      </Link>
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" z-50 fixed w-full h-fit md:top-6 bottom-20 flex justify-center"
      >
        <div className="z-0 p-0.5 fixed bg-black bg-opacity-90 rounded-2xl flex border border-gray-400 md:gap-0 gap-4">
          <NavbarButton
            buttonLink="/"
            buttonName="Home"
            iconPath="/icons/home.svg"
          ></NavbarButton>
          <NavbarButton
            buttonLink="/aboutMe"
            buttonName="About me"
            iconPath="/icons/aboutMe.svg"
          ></NavbarButton>
          {/*
          <NavbarButton
            buttonLink="/work"
            buttonName="Work"
            iconPath="/icons/work.svg"
          ></NavbarButton>
          <NavbarButton
            buttonLink="/gallery"
            buttonName="Gallery"
            iconPath="/icons/gallery.svg"
          ></NavbarButton>
          */}
          <NavbarButton
            buttonLink="/projects"
            buttonName="Projects"
            iconPath="/icons/projects.svg"
          ></NavbarButton>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
