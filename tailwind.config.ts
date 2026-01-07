import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1337ec",
                    dark: "#0e2ab0",
                    light: "#e0e7ff",
                },
                background: {
                    light: "#f6f6f8",
                    dark: "#101322",
                },
                surface: {
                    light: "#ffffff",
                    dark: "#1a1d2d",
                }
            },
            fontFamily: {
                display: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/container-queries")
    ],
};
export default config;