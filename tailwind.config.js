/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["w-28", "w-24", "w-20", "w-16", "w-10", "w-14", "w-5"],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "#F8BE6E",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FEF2E3",
          300: "#FCE1BC",
          400: "#FACF95",
          500: "#F8BE6E",
          600: "#F5A638",
          700: "#EA8D0B",
          800: "#B56D09",
          900: "#7F4C06",
        },
        purple: {
          DEFAULT: "#C8B3EE",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#F8F6FD",
          400: "#E0D4F5",
          500: "#C8B3EE",
          600: "#A785E4",
          700: "#8657D9",
          800: "#662DCB",
          900: "#4F239D",
        },
        green: {
          DEFAULT: "#8FBB92",
          50: "#FFFFFF",
          100: "#F5F9F5",
          200: "#DBE9DC",
          300: "#C2DAC3",
          400: "#A8CAAB",
          500: "#8FBB92",
          600: "#6CA670",
          700: "#528856",
          800: "#3D6540",
          900: "#28422A",
        },
        darkpurple: {
          DEFAULT: "#49326B",
          50: "#A48CC9",
          100: "#997EC3",
          200: "#8462B6",
          300: "#6F4CA3",
          400: "#5C3F87",
          500: "#49326B",
          600: "#2F2045",
          700: "#150E1F",
          800: "#000000",
          900: "#000000",
        },
      },
      fluidTypography: {
        remSize: 14,
        minScreenSize: 600,
        maxScreenSize: 1280,
        minTypeScale: 1.25,
        maxTypeScale: 1.618,
        lineHeight: 1.5,
      },
    },
  },
  plugins: [require("tailwind-fluid-typography")],
};
