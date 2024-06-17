import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        penn_blue: {
          DEFAULT: "#041a49",
          100: "#01050f",
          200: "#020a1d",
          300: "#020f2c",
          400: "#03153a",
          500: "#041a49",
          600: "#08379b",
          700: "#0c54ed",
          800: "#5a8cf6",
          900: "#adc5fb",
        },
        dark_green: {
          DEFAULT: "#142a15",
          100: "#040804",
          200: "#081108",
          300: "#0c190d",
          400: "#102111",
          500: "#142a15",
          600: "#316634",
          700: "#4ea252",
          800: "#86c589",
          900: "#c2e2c4",
        },
        anti_flash_white: {
          DEFAULT: "#f1f1f1",
          100: "#303030",
          200: "#616161",
          300: "#919191",
          400: "#c2c2c2",
          500: "#f1f1f1",
          600: "#f5f5f5",
          700: "#f7f7f7",
          800: "#fafafa",
          900: "#fcfcfc",
        },
        xanthous: {
          DEFAULT: "#fcbf49",
          100: "#402b01",
          200: "#815602",
          300: "#c18203",
          400: "#fbab0a",
          500: "#fcbf49",
          600: "#fdcd6e",
          700: "#fdda92",
          800: "#fee6b7",
          900: "#fef3db",
        },
        vanilla: {
          DEFAULT: "#eae2b7",
          100: "#413a13",
          200: "#827426",
          300: "#c2ae38",
          400: "#d8c977",
          500: "#eae2b7",
          600: "#eee8c6",
          700: "#f3eed4",
          800: "#f7f4e3",
          900: "#fbf9f1",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shade: {
          "0%": { left: "0%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s step-start infinite",
        shade: "shade 1s linear both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
