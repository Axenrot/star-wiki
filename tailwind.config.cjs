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
        charactersbg: "url('/charactersbg.jpg')",
        starshipsbg: "url('/starshipsbg.jpg')",
        characterdetail: "url('/characterdetails.png')",
        "characterdetail-sm": "url('/characterdetails-sm.png')",
        "characterdetail-lg": "url('/characterdetails-lg.png')",
        sw: "url('/swconcept.gif')",
      },
      colors: {
        skyblue: "#c1dbf1",
        brightblue: "#1593f3",
        midblue: "#1589f3",
        darkblue: "#0f60a9",
        staryellow: "#e8db5b",
        starred: "#ef0514",
        darkgray: "#1A1A1A",
        semiblack: "#040404",
      },
    },
  },
  plugins: [],
};
