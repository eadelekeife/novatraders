import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--main)"
      },
      gridTemplateColumns: {
        "1/2": "1fr 2fr",
        "1/1.5": "1fr 1.5fr"
      },
      fontFamily: {
        worksans: "Work Sans"
      }
    }
  },
  plugins: [],
} satisfies Config;
