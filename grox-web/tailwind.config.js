/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                grox: {
                    black: "#0B0B0C",
                    red: "#C9181E",
                    gray: "#A1A1AA",
                },
            },
        }
    },
    plugins: [],
};