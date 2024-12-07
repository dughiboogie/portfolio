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

        <div className="flex flex-col items-center text-center px-4 md:px-10">
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
            <p className="font-roboto font-extrabold text-4xl md:text-6xl">
              Welcome to My Portfolio
            </p>
            <p className="max-w-3xl font-roboto text-base md:text-2xl">
              Hi there! I am Marco Dugatto (Dughi for short), a 29 years old guy
              with a constant curiosity for what life has to offer. I am also
              italian, so if my English is bad I humbly beg your pardon in
              spaghetti. I have way too many passions and way too little time to
              follow them all, but isn&apos;t that the story of everyone&apos;s
              life? Fortunately for me I have learned to focus on just a bunch
              of them, so since January 2021 I&apos;ve been learning to make
              video games.
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
              <div className=" self-center">
                <Link href="/projects">
                  <button className="mt-4 px-2 py-2 bg-rose-quartz text-black font-bold rounded-lg shadow-2xl">
                    See My Projects
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
