/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                fira: ['"Fira Sans Condensed"', 'sans-serif'],
                libre: ['"Libre Caslon Text"', 'serif'],
            },
            backgroundImage: {
                'header-bg': "url('/src/assets/header_bg.png')",
                'about-bg': "url('/src/assets/about_bg.png')",
            },
            objectPosition: {
                'hashgames' : '-400px center'
            },
        },
    },
};
