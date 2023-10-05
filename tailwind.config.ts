import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        xl: "1300px",
        "2xl": "1300px",
      },
      fontFamily: {
        "noto-sans": ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
