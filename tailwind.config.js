/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto Mono, monospace",
      rubik: "Rubik, sans-serif",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        "type-purple": "#381fd1",
        gold: "#fedb63",
        indi: "rgba(var(--light-indigo), 0.92)",
        "bg-color": "#f6f6eb",
        "purple-base-500": "#381fd1",
        "base-teal": "#99d6cc",
        "link-static": "#381fd1",
        "base-blue": "#10284b",
      },
      animation: {
        rotateFor: "rotateFor 0.15s ease-in-out forwards",
        rotateBack: "rotateBack 0.15s ease-in-out forwards",
        reverseRotateFor: "reverseRotateFor 0.15s ease-in-out forwards",
        reverseRotateBack: "reverseRotateBack 0.15s ease-in-out forwards",
        fadeIn: "fadeIn 0.15s ease-in-out forwards",
        roll: "roll 240s linear infinite",
        "streamlining-section-fade-in":
          "streamliningSectionFadeIn .4s ease .2s forwards",
      },
      keyframes: {
        rotateFor: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
        rotateBack: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-45deg)" },
        },
        reverseRotateFor: {
          "0%": { transform: "rotate(45deg)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "rotate(0deg)" },
        },
        reverseRotateBack: {
          "0%": { transform: "rotate(-45deg)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        roll: {
          "100%": { transform: "translateX(-5091px)" },
        },
        streamliningSectionFadeIn: {
          "0%": {
            opacity: ".5",
            transform: "translateY(.25rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      backgroundImage: {
        linearBg:
          "url(https://images.getstark.co/marketing/headers/gradient-bg.webp)",
      },
      screens: {
        desktop: "840px",
      },
    },
  },
  plugins: [],
};
