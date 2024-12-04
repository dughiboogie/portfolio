import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "200": "50rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "tea-green": "#C9F2C7",
        "space-cadet": "#3B335C",
        "rose-quartz": "#BCABAE",
      },
    },
  },
  plugins: [],
} satisfies Config;
