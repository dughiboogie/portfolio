"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-neutral-900">
      <div className="mt-10">
        <Navbar></Navbar>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-tea-green"
          >
            <h1>Welcome to My Portfolio</h1>
            <p className="max-w-3xl">
              Hi there! I am Marco Dugatto (Dughi for short), a 29 years old guy
              with a constant curiosity for what life has to offer. I am also
              italian, so if my English is bad I humbly beg your pardon in
              spaghetti. I have way too many passions and way too little time to
              follow them all, but isn't that the story of everyone's life?
              Fortunately for me I have learned to focus on just a bunch of
              them, so since January 2021 I've been learning to make video
              games.
            </p>
          </motion.div>
        </div>

        {/* All items inside this motion.div will be rendered with a left-to-right transition */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
            className="text-tea-green"
          >
            <div
              id="Spotlight"
              className="bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 w-200"
            >
              <p>Explore my work and projects.</p>
              <Link href="/projects">
                <button style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
                  See My Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
