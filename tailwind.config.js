/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./*.html"],
  content: [
      "./Content/**/*.{cshtml,js,ts,html}",
    "./Views/**/*.{cshtml,js,ts,html}"
  ],
  theme: {
    extend: {
      // fontFamily: {
      //     body: ['"Open Sans"'],
      // },
      margin: {
        seperate: "13px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      screens: {
        xs: { max: "500px" },
        md: { min: "768px" },
        lg: { min: "900px" },
        xl: { min: "1240px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        // sm: { max: "640px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        // md: { min: '768px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        // lg: { min: '1024px', max: '1279px' },
        // // => @media (min-width: 1024px and max-width: 1279px) { ... }
        // xl: { min: '1280px', max: '1535px' },
        // // => @media (min-width: 1280px and max-width: 1535px) { ... }
        // '2xl': { min: '1536px' },
        // // => @media (min-width: 1536px) { ... }
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        primary: "#11296d",
        secondary: "#19bfd3",
        secondaryAct: "#197ed3",
        // bgPrimary: "",
        bgSecondary: "#f7f7f8",
        textPrimary: "#1a2448",
        textSecondary: "#5d616f",
        textProfilePrimary: "#5d616fdc",
        textProfileSecondary: "#dbd9d9",
        iconPrimary: "#f3a826",
        iconSecondary: "#52525b",
        iconLightColor: "#9a9a9a",
        // borderPrimary: "#f1f2f4",
        borderPrimary: "#e5e5e5",
        borderSecondary: "#f2f2f2",
        borderProfile: "#f1f2f4",
        // successPrimary: "",
        successSecondary: "#00a049",
        waitingPrimary: "#f6dc4a",
        // negativePrimary: "#d32f2f",
        secondaryBtn: "#1a2448dc",

        red: {
          50: "#F7BEC3",
          100: "#F88B94",
          200: "#F76773",
          300: "#FB4D5C",
          400: "#F82D3E",
          500: "#ff1328",
          600: "#E81325",
          700: "#CB1423",
          800: "#AD1320",
          900: "#8E101B",
          custRed: "#f30235",
          custBackGround: "#fff5f0",
          orderCancel: "#f00a0afb",
        },

        gray: {
          custGray: "#5d616fdc",
          custBorders: "#ececec80",
          custIcon: "#808080",
          cardMobileborder: "#f4f4f4",
        },
        // green: {
        //   orderComplete: "#0bd837",
        //   cardMobile: "#12b886",
        // },
        blue: {
          orderWaiting: "#00aeff",
          custblue: "#1a2448dc",
          cardMobile: "#0221f3",
        },
      },

      boxShadow: {
        inputBox: "0 0 10px -2px rgba(0, 0, 0, 0.1);",
        Box: "0 0 10px -2px rgba(0, 0, 0, 0.1)",
        addToCardBtn: " 0 1px 5px rgb(0 0 0 / 20%)",
        custom: "-3px 4px 30px -2px rgba(0, 0, 0, 0.1)",
        darkCust: "0 0 11px rgba(33, 33, 33, 0.3)",
      },

      fontFamily: {
        sans: ["IRANSansX"],
        serif: ["IRANSansX"],
        mono: ["IRANSansX"],
        display: ["IRANSansX"],
        body: ["IRANSansX"],
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
}
