/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,twig,php}","./views/*.{twig,html}"],
  theme: {
    extend: {
      colors: {
        // Extend with your colors
        'black': '#222222',
        'red': '#EE3823',
        'gold': '#F5AF00',
        'green': '#047658',
        'blue': '#024DA1',
        'light-blue': '#A4CEFE',
        'tan': '#FFE5C0',
        'white': '#f7f7f7'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      borderColor: theme => ({
        ...theme('colors'),
       
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
       
      }),
      boxSizing: {
        DEFAULT: 'border-box',
      },
    },
    container: {
      padding: '1rem',
      center: true,
      boxSizing: 'border-box'
    },
    safelist: [
      'transform',
      'transition-transform',
      'group-hover:translate-x-2',
      'group-hover:translate-x-4',
      'group-hover:rotate-6',
      'rotate-6',
      'translate-x-2',
      'translate-x-4'
    ],
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

