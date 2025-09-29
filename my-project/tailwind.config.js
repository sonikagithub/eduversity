module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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