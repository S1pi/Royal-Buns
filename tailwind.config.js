/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3E9D2',
        secondary: '#4B2E1D',
        yellow: '#D4AF37',
        green: '#7B8B42',
        red: '#8B3A3A',

        background: {
          light: '#88745C',
          dark: '#4B2E1D',
        },
      },
      fontSize: {
        p: '1rem',
        h5: '2rem',
        h2: '20px',
        h1: '10rem',
      },
    },
    plugins: [],
  },
};
