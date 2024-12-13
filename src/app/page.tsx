"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/navbar";
import BlurredMountainsBackground from "./components/blurredMountainsBackground";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-black">
      <BlurredMountainsBackground />

      <div className="md:mt-28 mt-8 relative z-20">
        <Navbar></Navbar>

        <div className="flex flex-col items-center text-center px-4 md:px-10 mt-4 md:mt-8 md:mb-8">
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
              Marco Dugatto - DughiBoogie
            </p>
            <p className="font-roboto font-extrabold text-3xl md:text-5xl mx-4">
              Game Developer | Nature Explorer | Music Aficionado
            </p>
            <p className="max-w-md md:max-w-3xl font-roboto text-base text-left md:text-2xl inline-block">
              It's a me, Marco!<br></br>
              I’m a game developer with a passion for engaging worlds and
              experiences.<br></br> I dream of crafting such adventures to make
              people feel the same passion that drives me.
            </p>
          </motion.div>
        </div>

        {/* All items inside this motion.div will be rendered with a left-to-right transition */}
        <div className="flex justify-center">
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
            <div
              id="Spotlight"
              className="font-roboto bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 max-w-sm md:max-w-4xl mx-8"
            >
              <p className="font-bold text-2xl md:text-3xl text-center">
                Latest project
              </p>
              <p className="font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left">
                Things Better Left Unknown
              </p>
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
                    Delve into the dark secrets of alchemy. Explore a mysterious
                    cabin in the woods. Decipher glyphs, codes, and poems.
                    Combine unusual ingredients through alchemical processes,
                    and uncover things that would be better left unknown.
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
                <Link href="https://deeprestgames.itch.io/things-better-left-unknown">
                  <button className="px-2 py-2 w-full max-w-xs md:w-48 bg-rose-quartz text-black font-bold rounded-lg shadow-2xl">
                    Go to itch.io game page
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="px-2 py-2 w-full max-w-xs md:w-48 bg-rose-quartz text-black font-bold rounded-lg shadow-2xl">
                    Go to all projects
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* All items inside this motion.div will be rendered with a left-to-right transition */}
        <div className="flex justify-center">
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
            <div
              id="Spotlight"
              className="bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 max-w-sm md:max-w-4xl mx-8"
            >
              <p>Explore my work and projects.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque viverra nisi diam, in pharetra felis pretium quis.
                Cras mi mi, lobortis eu erat vel, dignissim mollis purus. Donec
                tincidunt feugiat risus. Cras in leo sit amet orci dictum
                pellentesque. Vestibulum dapibus facilisis diam, vel
                pellentesque sem viverra at. Nam accumsan rhoncus lacus, sit
                amet interdum arcu varius sed. Phasellus at orci ut lectus
                rhoncus luctus. Nullam ut eros mollis, rutrum nunc vitae,
                imperdiet nisl.
              </p>
              <p>
                Nunc ullamcorper finibus dui eget imperdiet. Donec lobortis
                tincidunt elit. Nullam mattis quam sit amet feugiat semper. Sed
                volutpat, velit congue blandit faucibus, tellus nisl porta
                augue, eget blandit augue dui vel mauris. Vestibulum venenatis
                iaculis ante consequat pretium. Proin nec lectus sem. Maecenas
                id augue at justo maximus lobortis. Nullam sagittis nunc eu
                tellus dictum, sed gravida mi volutpat.
              </p>
              <Link href="/projects">
                <button className="mt-4 px-2 py-2 bg-rose-quartz text-black font-bold rounded-lg shadow-2xl">
                  See My Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-12 md:py-4" />
    </div>
  );
}
