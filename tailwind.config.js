/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'header-bg': "url('/src/assets/header_bg.jpg')",
                'about-bg': "url('/src/assets/about_bg.jpg')",
              },
            screens: {

            },
        },
    },
};
