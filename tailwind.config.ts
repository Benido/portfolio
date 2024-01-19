import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cool-blue' : '#A8D0E6',
        'serious-blue': '#24305E',
        'pale-yellow': '#F8E9A1',
        'grapefruit': '#F76C6C'
      },
      lineHeight: {
        'big-title': '0.8'
      },
      backdropBrightness: {
        '25' : '.25'
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
