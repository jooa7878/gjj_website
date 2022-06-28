/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "gjj-blue": "#3888FF",
        "gjj-orange": "#FF5900",
        "mono-1": "#F3F3F3",
        "mono-2": "#D2D2D2",
        "mono-3": "#999",
        "mono-4": "#585858",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
