import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontWeight: {
              bold: "700",
            },
            colors: {
                primary: "#EFEFEF",
                secondary: "#212127",
                action: "#FF7F57",
                txt: "#202020",
                test1: "#bb13bb",
                test2: "#2331d5",
                test3: "#23bad5",
            },
        },
        fontFamily: {
            outfit: ["Outfit", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
            inter: ["Inter", "sans-serif"],
            karla: ["Karla", "sans-serif"],
        },
    },
    plugins: [],
};
export default config;
