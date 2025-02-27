/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Uses prefers-color-scheme
  theme: {
    extend: {
      fontFamily: {
        tinos: "var(--font-tino-serif)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        talithaRed: "#BF3119",
        talithaGreen: "#8CC940",
        headingColor: "#191919",
        paragraph: "#424242"
      },
    },
  },
  plugins: [],
};
