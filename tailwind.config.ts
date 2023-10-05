import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '3xl': '1760px',
      },
    },
  },
  plugins: [],
};
export default config;

