/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      vsm: "550px",
      sm: "640px",
      md: "768px",
      mdl: "900px",
      lg: "1024px",
      sxl: "1150px",
      xl: "1280px",
      xxl: "1440px",
    },
    colors: {
      black: {
        main: "#000000",
        dune: "#2E2E2E",
        ebony: "#001A23",
      },
      white: "#fff",
      grey: {
        storm: "#637381",
        regent: "#8890A4",
      },
      conifer: "#B4D333",
      azure: "#00AEEF",
    },
    extend: {
      boxShadow: {
        "category-card": " 0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
