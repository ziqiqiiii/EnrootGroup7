/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes:{
        flip: {
          'from': {transform:'rotateX(0deg)', transformOrigin: '50% bottom ',},
          'to': {transform: 'rotateX(180deg)', transformOrigin: '50% bottom ',}
        }
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
      },
      colors: {
        'dark-green': '#163025',
        'dark-brown': '#523D35',
        'light-brown-green': '#959D90',
        'light-brown': '#D0C0A8',
        'light-pink': '#E8D9CD',
        'brown-ish-white': '#EFEFE9',
      },
    },
  },
  plugins: [],
};