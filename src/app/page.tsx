"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import BlurredMountainsBackground from "./components/blurredMountainsBackground";
import SpotlightCard_HomePage from "./components/spotlightCard_HomePage";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-black">
      <BlurredMountainsBackground />

      <div className="md:mt-28 mt-8 relative z-20">
        <Navbar></Navbar>

        <div className="flex flex-col items-center text-center px-4 md:px-10 mt-4 md:mt-8 md:mb-8">
          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "inset(0 100% 100% 0 round 1rem)",
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0 0 round 1rem)",
              filter: "blur(0px)",
            }}
            transition={{
              clipPath: { duration: 2, ease: "easeInOut" },
              filter: { duration: 2.5, ease: "easeInOut" },
            }}
            className="text-tea-green"
          >
            <p className="font-roboto font-extrabold text-4xl md:text-7xl">
              Marco Dugatto | DughiBoogie
            </p>
            <p className="max-w-md md:max-w-3xl font-roboto text-xl text-center md:text-left md:text-2xl inline-block">
              It's a me, Marco!<br></br>
              I’m a game developer with a passion for engaging worlds and
              meaningful experiences.<br></br> I dream of crafting games that I
              would love to play, and that make the players feel the same
              passion.
            </p>

            <div className="my-8 flex flex-col items-center justify-center md:gap-8 gap-4 max-w-full">
              <Link className="flex text-base" href="/aboutMe">
                <motion.div
                  className="md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2"
                  whileTap={{ scale: 0.9 }}
                  initial={{
                    backgroundColor: "#0000008D",
                  }}
                  whileHover={{
                    backgroundColor: "#22222299",
                  }}
                  animate={{
                    backgroundColor: "#0000008D",
                  }}
                  transition={{ type: "tween", ease: "easeOut" }}
                >
                  <div className="font-semibold flex text-white">
                    Learn more about me
                  </div>
                  <img
                    src="/icons/arrow-right.svg"
                    alt={`Arrow icon`}
                    className="hidden md:w-5 md:h-5 md:block"
                  />
                </motion.div>
              </Link>
              <Link className="flex text-base" href="/games">
                <motion.div
                  className="md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2"
                  whileTap={{ scale: 0.9 }}
                  initial={{
                    backgroundColor: "#0000008D",
                  }}
                  whileHover={{
                    backgroundColor: "#22222299",
                  }}
                  animate={{
                    backgroundColor: "#0000008D",
                  }}
                  transition={{ type: "tween", ease: "easeOut" }}
                >
                  <div className="font-semibold flex text-white">
                    Explore my games
                  </div>
                  <img
                    src="/icons/arrow-right.svg"
                    alt={`Arrow icon`}
                    className="hidden md:w-5 md:h-5 md:block"
                  />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Spotlights */}
        <div className="mt-4 flex justify-center">
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "inset(0 100% 0 0 round 1rem)",
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0 0 round 1rem)",
              filter: "blur(0px)",
            }}
            transition={{
              clipPath: { duration: 1.5, delay: 1, ease: "easeInOut" },
              filter: { duration: 1, delay: 1, ease: "easeInOut" },
            }}
            className="text-tea-green mt-4"
          >
            {/* TBLOU */}
            <SpotlightCard_HomePage
              spotlightHeader="LATEST GAME"
              spotlightTitle="Things Better Left Unknown"
              spotlightContent=<div>
                <p className="font-bold text-2xl md:text-3xl text-center"></p>
                <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"></p>
                <div className="flex flex-col gap-4 items-center -mt-4">
                  {/* Image Section */}
                  <div className="relative w-full pb-[56.25%] flex">
                    <iframe
                      className="absolute w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/p160z1ScYEk?si=eSDh3ExWkMcMmuF5"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* First Paragraph Section */}
                  <div>
                    <p className="font-medium self-center italic text-md mb-0 mt-2">
                      Delve into the dark secrets of alchemy. Explore a
                      mysterious cabin in the woods. Decipher glyphs, codes, and
                      poems. Combine unusual ingredients through alchemical
                      processes, and uncover things that would be better left
                      unknown.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full">
                  <Link className="flex text-base" href="/games">
                    <motion.div
                      className="md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2"
                      whileTap={{ scale: 0.9 }}
                      initial={{
                        backgroundColor: "#0000008D",
                      }}
                      whileHover={{
                        backgroundColor: "#22222299",
                      }}
                      animate={{
                        backgroundColor: "#0000008D",
                      }}
                      transition={{ type: "tween", ease: "easeOut" }}
                    >
                      <div className="font-semibold flex text-white">
                        Explore my games
                      </div>
                      <img
                        src="/icons/arrow-right.svg"
                        alt={`Arrow icon`}
                        className="hidden md:w-5 md:h-5 md:block"
                      />
                    </motion.div>
                  </Link>
                </div>
              </div>
            />

            {/* WHAT'S GOING ON */}
            <SpotlightCard_HomePage
              spotlightHeader={
                <Link
                  className="font-bold text-3xl md:text-4xl text-center"
                  href="https://media.tenor.com/uJm_ZTk5WGMAAAAM/heman-hey.gif"
                >
                  WHAT'S GOING ON
                </Link>
              }
              spotlightTitle=""
              spotlightContent=<div>
                <p className="font-bold text-2xl md:text-3xl text-center"></p>
                <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"></p>
                <div className="flex flex-col gap-4 items-center -mt-4">
                  {/* First Paragraph Section */}
                  <div>
                    <p className="font-medium italic self-center text-md mb-0 mt-2">
                      I'm currently in Italy, working as a System Administrator
                      for a manufacturing company.<br></br>I recently started
                      playing live with a band after almost 6 years from the
                      last gig.<br></br>
                      In 2024 I started making games with a friend from Munich,
                      and we ended up developing four games (plus a couple
                      unfinished ones).<br></br>
                      In 2024 I also picked up climbing.<br></br>
                      In 2023 I came back to Italy from Hamburg on a bike, on a
                      month long trip.<br></br>
                      That was the last spoiler.<br></br>
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full">
                  <Link className="flex text-base" href="/aboutMe">
                    <motion.div
                      className="md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2"
                      whileTap={{ scale: 0.9 }}
                      initial={{
                        backgroundColor: "#0000008D",
                      }}
                      whileHover={{
                        backgroundColor: "#22222299",
                      }}
                      animate={{
                        backgroundColor: "#0000008D",
                      }}
                      transition={{ type: "tween", ease: "easeOut" }}
                    >
                      <div className="font-semibold flex text-white">
                        Learn more about me
                      </div>
                      <img
                        src="/icons/arrow-right.svg"
                        alt={`Arrow icon`}
                        className="hidden md:w-5 md:h-5 md:block"
                      />
                    </motion.div>
                  </Link>
                </div>
              </div>
            />

            {/* WHERE TO FIND ME */}
            <SpotlightCard_HomePage
              spotlightHeader="WHERE TO FIND ME"
              spotlightTitle=""
              spotlightContent=<div>
                <p className="font-bold text-2xl md:text-3xl text-center"></p>
                <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"></p>
                <div className="flex flex-col gap-4 items-center -mt-4">
                  {/* First Paragraph Section */}
                  <div>
                    <p className="font-medium italic self-center text-md mb-0 mt-2">
                      Here are a couple places where you can find me on the web:
                    </p>
                  </div>
                </div>
                <div className="mt-8 mb-1 justify-center md:gap-8 gap-4 max-w-[26rem] mx-auto grid md:grid-cols-2">
                  <Link
                    className="flex md:col-span-1"
                    href="https://github.com/dughiboogie"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <motion.div
                      className="w-40 md:w-52 min-h-20 p-2 rounded-xl border border-gray-400 flex items-center gap-2"
                      whileTap={{ scale: 0.9 }}
                      initial={{
                        backgroundColor: "#0000008D",
                      }}
                      whileHover={{
                        backgroundColor: "#22222299",
                      }}
                      animate={{
                        backgroundColor: "#0000008D",
                      }}
                      transition={{ type: "tween", ease: "easeOut" }}
                    >
                      <img
                        src="/GitHub_Logo_White.png"
                        alt={`GitHub Logo`}
                        className="w-full"
                      />
                    </motion.div>
                  </Link>
                  <Link
                    className="flex md:col-span-1"
                    href="https://linkedin.com/in/marco-dugatto"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <motion.div
                      className="w-40 md:w-52 min-h-20 p-4 rounded-xl border border-gray-400 flex items-center gap-2"
                      whileTap={{ scale: 0.9 }}
                      initial={{
                        backgroundColor: "#0000008D",
                      }}
                      whileHover={{
                        backgroundColor: "#22222299",
                      }}
                      animate={{
                        backgroundColor: "#0000008D",
                      }}
                      transition={{ type: "tween", ease: "easeOut" }}
                    >
                      <img
                        src="/LinkedIn_2021.png"
                        alt={`LinkedIn Logo`}
                        className="w-full"
                      />
                    </motion.div>
                  </Link>
                  <Link
                    className="flex md:col-span-2"
                    href="https://dughiboogie.itch.io/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <motion.div
                      className="w-40 md:w-52 min-h-20 p-4 rounded-xl border border-gray-400 flex items-center gap-2 col-span-2 mx-auto"
                      whileTap={{ scale: 0.9 }}
                      initial={{
                        backgroundColor: "#0000008D",
                      }}
                      whileHover={{
                        backgroundColor: "#22222299",
                      }}
                      animate={{
                        backgroundColor: "#0000008D",
                      }}
                      transition={{ type: "tween", ease: "easeOut" }}
                    >
                      <img
                        src="/Itch_io_logo.svg"
                        alt={`itch.io Logo`}
                        className="w-full"
                      />
                    </motion.div>
                  </Link>
                </div>
              </div>
            />
          </motion.div>
        </div>
      </div>

      <div className="py-12 md:py-4" />
    </div>
  );
}
