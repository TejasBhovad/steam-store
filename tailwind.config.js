/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#20D23C",
        background: "#131514",
        secondary: "#171918",
        tertiary: "#273D2B",
        utility: "#31343A",
      },
    },
  },
  plugins: [],
};
