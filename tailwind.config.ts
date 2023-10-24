import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fontWeight: {
          '0%': {
            fontWeight: "100",
            opacity: "1"
          },
          '50%': {
            opacity: "0.5"
          },
          '100%': {
            fontWeight: '900',
            opacity: "1"
          }
        }
      },
      animation: {
        fontWeight: 'fontWeight 2s ease-in-out alternate infinite'
      }
    },
  },
  plugins: [],
}
export default config
