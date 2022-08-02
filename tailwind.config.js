/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'design-purple': '#755CDE',
                'design-orange': '#F6A560',
                'design-pink': '#F39E9E',
                'design-red': '#EB7565',
                'design-cyan': '#61C4B7',
                'design-violet': '#552049',
                'design-black': '#030303',
                'design-grey': '#7A746E',
                'design-background': '#FFF7F0',
            },
            maxWidth: {
                '1440': '1440px'
            },
            fontFamily: {
                jakartaBold: ["PLUS JAKARTA SANS BOLD", "sans-serif"],
                jakartaMedium: ["PLUS JAKARTA SANS MEDIUM", "sans-serif"],
            }
        },
    },
    plugins: [],
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
}