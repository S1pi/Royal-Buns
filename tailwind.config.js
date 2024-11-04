/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(30, 64, 175)',
        secondary: 'rgb(245, 158, 11)',

        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(15, 23, 42)',
          darkBrown: '#88745C',
          containerBG: '#F3E9D2'
        },

        red: {
          100: 'rgb(239, 68, 68)',
          75: 'rgba(239, 68, 68, 0.75)',
          50: 'rgba(239, 68, 68, 0.5)',
          25: 'rgba(239, 68, 68, 0.25)',
          10: 'rgba(239, 68, 68, 0.1)',
        },
      },
      fontSize: {
        p: '1rem',
        h5: '2rem',
        h2: '4rem',
      },
    },
    plugins: [],
  },
};
