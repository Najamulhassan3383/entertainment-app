/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#fc4747",
        darkBlue: "#10141e",
        semiDarkBlue: "#161d2f",
        greyishBlue: "#5a698f",
        pureWhite: "#fff",

        // --pureWhite: #fff;
        // --darkBlue: #10141e;
        // --semiDarkBlue: #161d2f;
        // --greyishBlue: #5a698f;
        //     }
      },
    },
  },
  plugins: [],
};
