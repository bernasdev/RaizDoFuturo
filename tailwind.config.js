/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "data-[orientation=vertical]:flex-col",
    "data-[orientation=horizontal]:flex-row",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
