/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0C',
          50:  '#1A1A1D',
          100: '#141417',
          200: '#101013',
          300: '#0B0B0C',
          400: '#08080A',
        },
        neon: {
          purple: '#B964FF',
          violet: '#8B5CF6',
          lime:  '#BEF264',
          green: '#84CC16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #B964FF 0%, #84CC16 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(185,100,255,0.18) 0%, rgba(132,204,22,0.12) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-purple': '0 0 24px rgba(185, 100, 255, 0.50)',
        'glow-lime':   '0 0 24px rgba(132, 204, 22, 0.50)',
        'glow-mix':    '0 0 32px rgba(185, 100, 255, 0.40), 0 0 32px rgba(132, 204, 22, 0.28)',
        'card':        '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 18px rgba(185,100,255,0.40), 0 0 32px rgba(132,204,22,0.22)' },
          '50%':      { boxShadow: '0 0 28px rgba(185,100,255,0.60), 0 0 48px rgba(132,204,22,0.38)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
