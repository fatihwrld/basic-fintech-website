module.exports = {
  content: [
    './**/*.html',
    './js/**/*.js',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'infinite-scroll': 'infinite-scroll 6s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '0' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '0' }],
        '4xl': ['2.25rem', { lineHeight: '1', letterSpacing: '0' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
};
