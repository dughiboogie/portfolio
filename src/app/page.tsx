"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/navbar";
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
            <p className="max-w-md md:max-w-3xl font-roboto text-base text-left md:text-2xl inline-block">
              It's a me, Marco!<br></br>
              I’m a game developer with a passion for engaging worlds and
              experiences.<br></br> I dream of crafting such adventures to make
              people feel the same passion that drives me.
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
                    backgroundColor: "#121212FF",
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
              <Link className="flex text-base" href="/projects">
                <motion.div
                  className="md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2"
                  whileTap={{ scale: 0.9 }}
                  initial={{
                    backgroundColor: "#0000008D",
                  }}
                  whileHover={{
                    backgroundColor: "#121212FF",
                  }}
                  animate={{
                    backgroundColor: "#0000008D",
                  }}
                  transition={{ type: "tween", ease: "easeOut" }}
                >
                  <div className="font-semibold flex text-white">
                    Explore my projects
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

        {/* Latest project */}
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
            <SpotlightCard_HomePage
              spotlightHeader="Latest project"
              spotlightTitle="Things Better Left Unknown"
              spotlightContent=<div>
                <p className="font-bold text-2xl md:text-3xl text-center"></p>
                <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"></p>
                <div className="flex flex-col md:flex-row gap-4 items-center -mt-4">
                  {/* Image Section */}
                  <div className="flex-shrink-0">
                    <Link href="https://deeprestgames.itch.io/things-better-left-unknown">
                      <img
                        className="w-full md:w-72 self-center rounded-lg"
                        src="pictures/TBLU_1.png"
                        alt="Project Thumbnail"
                      />
                    </Link>
                  </div>
                  {/* First Paragraph Section */}
                  <div>
                    <p className="font-medium self-center italic text-md mb-0">
                      Delve into the dark secrets of alchemy. Explore a
                      mysterious cabin in the woods. Decipher glyphs, codes, and
                      poems. Combine unusual ingredients through alchemical
                      processes, and uncover things that would be better left
                      unknown.
                    </p>
                  </div>
                </div>
                {/* Second Paragraph Section */}
                <div className="mt-4">
                  <p>
                    I made this game with some friends for the Pirate Software
                    Game Jam 15. The development process has been a lot of fun,
                    and I learned a ton of stuff working on it.<br></br>
                    The game is made in Godot, and it's fully playable online.
                    Check it out on itch.io!
                  </p>
                </div>
                <div className="mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full">
                  <Link
                    className="flex text-base"
                    href="https://deeprestgames.itch.io/things-better-left-unknown"
                  >
                    <motion.div
                      className="md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2"
                      whileTap={{ scale: 0.9 }}
                      initial={{
                        backgroundColor: "#0000008D",
                      }}
                      whileHover={{
                        backgroundColor: "#121212FF",
                      }}
                      animate={{
                        backgroundColor: "#0000008D",
                      }}
                      transition={{ type: "tween", ease: "easeOut" }}
                    >
                      <div className="font-semibold flex text-white">
                        Go to game page
                      </div>
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
