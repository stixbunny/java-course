import type { Config } from "tailwindcss";
import * as colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.sky[400],
        primaryhover: colors.sky[200],
        secondary: colors.slate[800],
        secondaryhover: colors.slate[600],
        accent: colors.slate[700],
        text: colors.slate[200],
        background: colors.slate[900],
        backgroundmid: colors.slate[800],
        backgroundhigh: colors.slate[700],
        border: colors.slate[500],
        borderhigh: colors.slate[600],
      },
    },
  },
  plugins: [],
};
export default config;
