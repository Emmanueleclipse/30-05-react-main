const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': {
          DEFAULT: '#131437',
        },
        orange: {
          DEFAULT: '#EB7000',
          light: '#F5A33D',
          error: '#EF4115',
          'error-light': '#FFF5F3',
        },
        teal: {
          DEFAULT: '#1FA497',
          light: '#7BD9D0',
        },
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        3: '3px',
      },
      width: {
        '2/7': '28.5714286%',
        15: '3.75rem',
        18: '4.5rem',
        19: '4.75rem',
        26: '6.5rem',
        '6/7': '85.7142857%',
        68: '17rem',
      },
      height: {
        23: '5.75rem',
        26: '6.5rem',
        92: '23rem',
        '55vh': '55vh',
        '45vh': '45vh',
        '40vh': '40vh',
        '36vh': '36vh',
        '35vh': '35vh',
        '32vh': '32vh',
        '26vh': '26vh',
        '24vh': '24vh',
      },
      boxShadow: {
        xl:
          '0 1px 13px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      flex: {
        3: '3 3 0%',
        4: '4 4 0%',
      },
      letterSpacing: {
        '1/5': '.2em',
      },
      padding: {
        17: '4.25rem',
        15: '3.75rem',
      },
    },
    fontFamily: {
      montserrat: 'Montserrat',
      'gotham-medium': 'Gotham-Medium',
      'gotham-bold': 'Gotham-Bold',
      'gotham-book': 'Gotham-Book',
      'gotham-black': 'Gotham-Black',
    },
    screens: {
      '2xs': '375px',
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
