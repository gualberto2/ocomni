/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      header: "headertitle",
      primarybody: "primarybody",
      secondarybody: "secondarybody",
      boldbody: "boldbody",
      title: "headertitle",
      subtitle: "subheadertitle",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};

//#413286 dark button press
//#503DA4 button hover

// active:bg-[#413286] {ON CLICK}
// hover:bg-[#503DA4] {ON HOVER}
// bg-[#5B45BB] {STATIC BUTTON}
