/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        move: { // Define your custom keyframe for the 'move' animation
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
        move: 'move 30s linear infinite',
      },
      colors: {
        'aot-indigo': '#0F2167',
        'aot-blue': '#3559E0',
        'aot-blue-light': '#4CB9E7',
        'aot-yellow': '#FFD700',
        'aot-bone': '#FFECD6',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Modern browsers */
          'scrollbar-width': 'none',
          /* IE and Edge */
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

