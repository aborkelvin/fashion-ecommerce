import { Inter, Poppins } from 'next/font/google'
import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
        'fold':'270px',
        'phones':'350px',
        'xphones':'400px',
      'minitablet': '550px',
        ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        /* 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', */
        'text-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 16.06%, #FFFFFF 86.9%, rgba(255, 255, 255, 0) 106.25%)',
      },
      colors: {
        'primary-green': '#38CB89',
        'primary-grey': '#F3F5F7',
        'secondary-grey': '#6C7275',
        'black-100': '#141718',
        'black-200': '#121212',
        'black-300': '#343839',
      },
      fontFamily: {
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
export default config
