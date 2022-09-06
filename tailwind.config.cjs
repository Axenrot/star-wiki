/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      starjedi: ["starjedi"],
    },
    extend: {
      backgroundImage: {
        starship: "url('/starships.jpg')",
        character: "url('/characters.jpg')",
        sw: "url('/swconcept.gif')",
      },
    },
  },
  plugins: [],
};
