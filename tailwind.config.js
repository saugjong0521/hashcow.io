/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',         // HTML 파일
      './src/**/*.{js,jsx,ts,tsx}',  // src 폴더 내의 JS, JSX 파일
    ],
    darkMode: 'false',
    theme: {
        extend: {
          screens: {
            'content-max': { max: '800px' },
        },
        },
      },
  };
  