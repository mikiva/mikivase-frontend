/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                //"darkblue": "#0a192f",
                "darkblue": "#121c30",
                "accent": "#d0168f",
            },
            height: {
                "0.1": "1px"
            },
            fontSize: {
                "hero-dynamic": ["clamp(30px, 6.4vw, 5.5rem)", "1"],
                "3xl-dynamic": ["clamp(20px, 3vw, 1.875rem)", "1"],
            },
            spacing: {
                "unset": "unset"
            },


        },
    },
    plugins: [
        plugin(function ({addVariant}) {
            addVariant("child-not-last", "&>*:not(:last-child)")
        })
    ],
}

