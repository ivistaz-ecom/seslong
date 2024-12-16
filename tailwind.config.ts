import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        gibson: ["Gibson", "sans-serif"], // Add your custom font
      },
      animation: {
        swirl: "swirls 2s linear infinite",
      },
      keyframes: {
        swirls: {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "300" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
