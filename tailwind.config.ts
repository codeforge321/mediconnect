import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: { 50: "#EEF5FF", 100: "#D9E8FF", 500: "#2B7BEF", 600: "#1D63D1", 700: "#164EA6" }, teal: { 50: "#E8FAF7", 100: "#C5F2EB", 500: "#14B8A6", 600: "#0E968A" }, ink: "#0B2540", mist: "#F4F8FC" },
    fontFamily: { sans: ["var(--font-jakarta)", "system-ui", "sans-serif"] },
    boxShadow: { soft: "0 10px 30px -12px rgba(16,70,140,.25)" },
    keyframes: { rise: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "none" } }, dot: { "0%,80%,100%": { opacity: ".25" }, "40%": { opacity: "1" } } },
    animation: { rise: "rise .5s ease-out both", dot: "dot 1.2s infinite" },
  } },
  plugins: [],
};
export default config;
