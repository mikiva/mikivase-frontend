/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "darkblue": "#0a192f",
                "accent": "#d0168f",
            },
            height: {
                "0.1": "1px"
            },
            fontSize: {
                "7xl-dynamic": "clamp(40px, 8vw, 4.5rem)"
            }

        },
    },
    plugins: [],
}
