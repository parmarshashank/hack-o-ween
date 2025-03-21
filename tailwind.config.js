/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0D0D0D',
        'blood': '#B22222',
        'blood-light': '#DC3545'
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'fog': 'fog 60s linear infinite',
        'drip': 'drip 5s linear infinite'
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)', textShadow: '-2px 2px #ff0000' },
          '25%': { transform: 'translate(-2px, 2px)', textShadow: '2px -2px #ff0000' },
          '50%': { transform: 'translate(2px, -2px)', textShadow: '-2px -2px #ff0000' },
          '75%': { transform: 'translate(-2px, -2px)', textShadow: '2px 2px #ff0000' }
        },
        fog: {
          '0%': { transform: 'translateX(-100%) translateY(0)', opacity: '0' },
          '25%': { opacity: '0.5' },
          '50%': { opacity: '0.3' },
          '75%': { opacity: '0.5' },
          '100%': { transform: 'translateX(100%) translateY(-20%)', opacity: '0' }
        },
        drip: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
