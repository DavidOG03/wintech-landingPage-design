/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "offwhite": "#FAF9F6",
        "purple": "#8000FF",
        "brightPurple": "#CC9CF9",
        "brightPurpleTransparent": "#CC9CF968",
        "black": "#171717",
        "purpleText": "rgb(121, 135, 161)",
        "darkpurple": " rgb(128, 0, 255)",
        "grey": "rgb(242,229,255)"
      },
      backgroundImage: {
        "work": "url('/workplace.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(70%)' },
        }
      },
      // keyframes: {
      //   slide: {
      //     '0%': {
      //       left: "0"
      //     },
      //     '100%': {
      //       left: '-100%'
      //     },
      //   } 
      // },
        animation: {
          bounce: 'bounce 2.5s ease-in-out infinite',
        },
        // animation: {
        //   slide: 'slide 20s linear infinite',
        // },
      },
    },
    plugins: [],
  };
