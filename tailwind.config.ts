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
        "slide-in-bck-center": "slide-in-bck-center 6s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "text-pop-up-top": "text-pop-up-top 2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
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
          },
          "text-pop-up-top": {
            "0%": {
                transform: "translateY(0)",
                "transform-origin": "50% 50%",
                "text-shadow": "none"
            },
            to: {
                transform: "translateY(-50px)",
                "transform-origin": "50% 50%",
                "text-shadow": "0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 30px rgba(0, 0, 0, .1)"
            }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
