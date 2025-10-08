module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"], // Default sans will be Poppins
      },
      animation: {
        'progress': 'progress 1s ease-in-out',
      },
      keyframes: {
        progress: {
          '0%': { strokeDashoffset: 'circumference' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
