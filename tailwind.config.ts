import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-in-bck-center": "slide-in-bck-center 6s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
          "slide-in-bck-center": {
              "0%": {
                  transform: "translateZ(600px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateZ(0)",
                  opacity: "1"
              }
          }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
