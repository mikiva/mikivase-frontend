/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "darkblue": "#0a192f",
                "accent": "#64ffda",
            },
            height: {
                "0.1": "1px"
            }

        },
    },
    plugins: [],
}
