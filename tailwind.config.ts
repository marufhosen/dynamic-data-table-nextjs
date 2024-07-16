const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/documentation/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: { max: "639px" },
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        xxl: "1536px",
        ptablet: {
          raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)",
        },
        ltablet: {
          raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        muted: {
          ...colors.slate,
        },
        primary: colors.indigo,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },
      keyframes: {
        indeterminate: {
          "0%": { "margin-left": "-10%" },
          "100%": { "margin-left": "100%" },
        },
        "circle-chart-fill": {
          to: {
            "stroke-dasharray": "0 100",
          },
        },
        wave: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },

          "25%": {
            transform: "scale(1)",
            opacity: "1",
          },

          "100%": {
            transform: "scale(4.5)",
            opacity: "0",
          },
        },
        fadeInUp: {
          from: {
            transform: "translate3d(0, 20px, 0)",
          },

          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
        fadeInLeft: {
          from: {
            transform: "translate3d(20px, 0, 0)",
            opacity: "0",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
        spinAround: {
          from: {
            transform: "rotate(0deg)",
          },

          to: {
            transform: "rotate(359deg)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.65s linear infinite",
        indeterminate: "indeterminate 1s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },

  plugins: [
    plugin(({ addComponents, addVariant }: any) => {
      //target progress container
      addVariant("progress-container", "&::-webkit-progress-bar");

      //target progress bar/inner
      addVariant("progress-bar", [
        "&::-webkit-progress-value",
        "&::-moz-progress-bar",
        "&::-ms-fill",
      ]);

      addComponents({
        ".slimscroll::-webkit-scrollbar": {
          width: "6px",
        },
        ".slimscroll::-webkit-scrollbar-thumb": {
          "border-radius": ".75rem",
          background: "rgba(0, 0, 0, 0.1)",
        },
        ".slimscroll-opaque::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0) !important",
        },
        ".mask": {
          "mask-size": "contain",
          "mask-repeat": "no-repeat",
          "mask-position": "center",
        },
        ".mask-hex": {
          "mask-image":
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjQuNzg2IDE4MS40Yy05LjE5NiAwLTIwLjA2My02LjY4Ny0yNS4wNzktMTQuMjFMMy43NjIgMTA1LjMzYy01LjAxNi04LjM2LTUuMDE2LTIwLjkgMC0yOS4yNTlsMzUuOTQ1LTYxLjg2QzQ0LjcyMyA1Ljg1MSA1NS41OSAwIDY0Ljc4NiAwaDcxLjA1NWM5LjE5NiAwIDIwLjA2MyA2LjY4OCAyNS4wNzkgMTQuMjExbDM1Ljk0NSA2MS44NmM0LjE4IDguMzYgNC4xOCAyMC44OTkgMCAyOS4yNThsLTM1Ljk0NSA2MS44NmMtNC4xOCA4LjM2LTE1Ljg4MyAxNC4yMTEtMjUuMDc5IDE0LjIxMUg2NC43ODZ6Ii8+PC9zdmc+')",
        },
        ".mask-hexed": {
          "mask-image":
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBsLTYxLjg2LTM1Ljk0NUM2LjE1MSAxNTcuNDQuMyAxNDUuNzM3LjMgMTM2LjU0VjY1LjQ4NnoiLz48L3N2Zz4=')",
        },
        ".mask-deca": {
          "mask-image":
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOTYgMGw1OC43NzkgMTkuMDk4IDM2LjMyNyA1MHY2MS44MDRsLTM2LjMyNyA1MEw5NiAyMDBsLTU4Ljc3OS0xOS4wOTgtMzYuMzI3LTUwVjY5LjA5OGwzNi4zMjctNTB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')",
        },
        ".mask-blob": {
          "mask-image":
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAweiIvPjwvc3ZnPg==')",
        },
        ".mask-diamond": {
          "mask-image":
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBsMTAwIDEwMC0xMDAgMTAwTDAgMTAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')",
        },
      });
    }),
    function ({ addBase, theme }: any) {
      function extractColorVars(colorObj: any, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars: any =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};
