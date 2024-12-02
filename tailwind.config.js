/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f6f6f7",
        },
        darkslateblue: "#204e98",
        white: "#fff",
        silver: {
          "100": "#c1c4c8",
          "200": "#bdbdbd",
        },
        darkgray: "#979ba1",
        gray: {
          "100": "#1f1f1f",
          "200": "#121326",
          "300": "#0c0d1b",
        },
        darkslategray: "#2f303c",
        cornflowerblue: {
          "100": "#4d9eea",
          "200": "#4775bf",
          "300": "rgba(71, 117, 191, 0.09)",
        },
        black: "#000",
        limegreen: "#58cc46",
        aliceblue: "#e7f4ff",
      },
      spacing: {},
      fontFamily: {
        "source-sans-pro": "'Source Sans Pro'",
        inter: "Inter",
      },
      borderRadius: {
        "12xs": "1px",
        "8xs": "5px",
        "3xs": "10px",
        "10xs": "3px",
        xl: "20px",
        "36xl": "55px",
      },
    },
    fontSize: {
      sm: "14px",
      mini: "15px",
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      "5xl": "24px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "15xl": "34px",
      "8xl": "27px",
      smi: "13px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
