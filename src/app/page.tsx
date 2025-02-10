"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlurredMountainsBackground from "./components/blurredMountainsBackground";
import SpotlightCard_HomePage from "./components/spotlightCard_HomePage";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-black">
      <BlurredMountainsBackground />

      <div className="md:mt-28 mt-8 relative z-20">
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
              It&apos;s a me, Marco!<br></br>
              I’m a game developer with a passion for engaging worlds and
              meaningful experiences.<br></br> I dream of crafting games that I
              would love to play, and that make the players feel the same
              passion.<br></br>
              <br></br>
              In this page are collected (almost) all the games I worked on so
              far.<br></br>
              More to come!
            </p>
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
              spotlightHeader="Things Better Left Unknown"
              spotlightTitle=""
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
                {/* Second Paragraph Section */}
                <div className="mt-4">
                  <p>
                    I made this game with some friends for the Pirate Software
                    Game Jam 15.<br></br> There were 5 people working on the
                    game so the project management side has been a bit hectic,
                    but I learned a lot about pivoting according to the
                    deadlines to meet everyone&apos;s needs and complete the
                    project in time.<br></br>
                    This being said, it was a ton of fun working on this.
                    <br></br>
                    <br></br>
                    The game is made in Godot, and it&apos;s fully playable
                    online.
                    <br></br>
                    Check it out on itch.io!
                  </p>
                </div>
                <div className="mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full">
                  <Link
                    className="flex text-base"
                    href="https://deeprestgames.itch.io/things-better-left-unknown"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
                        Go to game page
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            />

            {/* Pizza Time */}
            <SpotlightCard_HomePage
              spotlightHeader="Pizza Time"
              spotlightTitle=""
              spotlightContent=<div>
                <p className="font-bold text-2xl md:text-3xl text-center"></p>
                <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"></p>
                <div className="flex flex-col gap-4 items-center -mt-4">
                  {/* Image Section */}
                  <div className="relative w-full pb-[56.25%] flex">
                    <iframe
                      className="absolute w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/DrjSL8mQMjk?si=xPvPJ-kbiS9dH_JM"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* First Paragraph Section */}
                  <div>
                    <p className="font-medium self-center italic text-md mb-0 mt-2">
                      Pizza Time is a short 3D Puzzle-Platformer adventure in
                      which you explore an architectural dreamscape, meet
                      eccentric characters and throw pizzas to solve puzzles.
                      <br></br>
                      Climb your way to the top and dig deeper in yourself.
                    </p>
                  </div>
                </div>
                {/* Second Paragraph Section */}
                <div className="mt-4">
                  <p>
                    I worked on this game for three months with a friend, and
                    it&apos;s been a wild ride.<br></br>
                    It started as a fun project that we decided to do right
                    after our first game jam together, and it became a massive
                    puzzle game with some wacky mechanics and a somewhat deep
                    narrative.<br></br>
                    <br></br>
                    During this project I learned the real meaning of{" "}
                    <b>scope creep</b>. New ideas were continuously bouncing
                    around and discussions were always stimulating. We had to
                    put real effort in saying &quot;let&apos;s stop here and
                    publish this&quot;.
                  </p>
                  <div className="mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full">
                    <Link
                      className="flex text-base"
                      href="https://deeprestgames.itch.io/pizza-time"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
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
                          Go to game page
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            />

            {/* Hell o' Borus */}
            <SpotlightCard_HomePage
              spotlightHeader="Pizza Time"
              spotlightTitle=""
              spotlightContent=<div>
                <p className="font-bold text-2xl md:text-3xl text-center"></p>
                <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left<"></p>
                <div className="flex flex-col gap-4 items-center -mt-4">
                  {/* Image Section */}
                  <img
                    className="relative md:w-4/6 w-full flex"
                    src="/HelloBorusCover.png"
                  ></img>
                  {/* First Paragraph Section */}
                  <div>
                    <p className="font-medium self-center italic text-md mb-0 mt-2">
                      Winter is almost over. An unknown warmth is starting to
                      spread. Coming change is inevitable. Spring is here!
                      <br></br> Hell o’ Borus is a 2D endless runner game where
                      the player controls Borus, a tiny helleborus seed that
                      awakens after being lethargic during the winter.
                    </p>
                  </div>
                </div>
                {/* Second Paragraph Section */}
                <div className="mt-4">
                  <p>
                    I worked on this game for three months with a friend, and
                    it&apos;s been a wild ride.<br></br>
                    It started as a fun project that we decided to do right
                    after our first game jam together, and it became a massive
                    puzzle game with some wacky mechanics and a somewhat deep
                    narrative.<br></br>
                    <br></br>
                    During this project I learned the real meaning of{" "}
                    <b>scope creep</b>. New ideas were continuously bouncing
                    around and discussions were always stimulating. We had to
                    put real effort in saying &quot;let&apos;s stop here and
                    publish this&quot;.
                  </p>
                  <div className="mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full">
                    <Link
                      className="flex text-base"
                      href="https://deeprestgames.itch.io/pizza-time"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
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
                          Go to game page
                        </div>
                      </motion.div>
                    </Link>
                  </div>
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
