/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f2ea',
        beige: '#e7dccd',
        mist: '#d7d2ca',
        charcoal: '#1d1b1a',
        ink: '#0d0c0c',
        gold: '#b59a5c',
        blush: '#ead5d6',
        rose: '#b35c7a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 16, 16, 0.12)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(181,154,92,0.25), transparent 42%), radial-gradient(circle at right, rgba(179,92,122,0.12), transparent 36%)',
      },
    },
  },
  plugins: [],
};