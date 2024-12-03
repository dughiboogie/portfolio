"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: "2rem", textAlign: "center" }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my work and projects.</p>
      <Link href="/projects">
        <button style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
          See My Projects
        </button>
      </Link>
      <p>
        Page for testing:
        <Link href="/tests">
          <button style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
            Tests
          </button>
        </Link>
      </p>
    </motion.div>
  );
}
