import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#686D76',
        secondary: '#DC5F00',
        white: '#EEEEEE',
        black: '#373A40',
      },
    },
  },
  plugins: [],
};
export default config;
