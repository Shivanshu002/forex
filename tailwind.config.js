/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://cdnl.iconscout.com/lottie/premium/preview-watermark/man-investing-in-cryptocurrency-4835259-4026100.mp4?h=700')",
      }
    },
  },
  plugins: [],
}

