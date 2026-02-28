/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#09090f',
        neonBlue: '#00f5ff',
        neonPink: '#ff2bd6',
        neonGreen: '#39ff88',
      },
      boxShadow: {
        neon: '0 0 30px rgba(0, 245, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
