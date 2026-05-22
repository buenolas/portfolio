import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1020",
        panel: "#12182B",
        text: "#F5F7FA",
        muted: "#AAB3C5",
        blue: "#4DA2FF",
        cyan: "#7BE0FF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(77, 162, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
