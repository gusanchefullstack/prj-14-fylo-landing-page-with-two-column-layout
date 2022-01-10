module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        veryDarkBlue: "hsl(243, 87%, 12%)",
        desaturatedBlue: "hsl(238, 22%, 44%)",
        brightBlue: "hsl(224, 93%, 58%)",
        moderateCyan: "hsl(170, 45%, 43%)",
        lightGrayishBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
      },
      backgroundImage: {
        curveMobile: "url('images/bg-curve-mobile.svg')",
        curveDesktop: "url('images/bg-curve-desktop.svg')",
      },
      backgroundPosition: {
        "top-4": "center bottom 4rem",
      },
    },
  },
  plugins: [],
};
