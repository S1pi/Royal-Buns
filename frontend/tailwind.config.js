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
        'hover-green': '#6B7C3E',

        background: {
          light: '#88745C',
          dark: '#4B2E1D',
        },
      },
      fontSize: {
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.875rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
      },
      boxShadow: {
        auth: '0 5px 15px rgba(0, 0, 0, 0.35)',
      },
      height: {
        'screen-header': 'calc(100vh - 5rem)',
      },
    },
    plugins: [],
  },
};
