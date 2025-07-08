import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wine-bar-red": "var(--wine-bar-red)",
        "wine-bar-black": "var(--wine-bar-black)",
        "wine-bar-white": "var(--wine-bar-white)",
      },
    },
  },
  plugins: [],
};

export default config;
