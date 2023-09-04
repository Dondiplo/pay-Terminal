/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "860px",
      // => @media (min-width: 960px) { ... }

      lg: "1240px",
      // => @media (min-width: 1440px) { ... }
      xl:"1440px",
    },
    
    extend: {
      colors: {
        red: "#262B3E",
      },
    },
  },
  plugins: [],
};
