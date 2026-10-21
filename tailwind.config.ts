import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'adineue Regular'", "'adineue'", 'sans-serif'],
        heading: ["'adineue Bold'", "'adineue'", 'sans-serif'],
        mono: ["'adineue Regular'", "'adineue'", 'monospace', 'sans-serif'],
        display: ["'adineue Bold'", "'adineue'", 'sans-serif'],
      },
      colors: {
        pureWhite: '#F6F6F6',
        softGrey: '#C3C3C3',
        charcoalBlack: '#262626',
        deepRed: '#A40001',
        obsidian: '#262626',
        surfaceDark: '#262626',
        surfaceDarker: '#1E1E1E',
        offWhite: '#F6F6F6',
        offWhiteAlt: '#F6F6F6',
        warmBeige: '#F6F6F6',
        softBeige: '#C3C3C3',
        darkBeige: '#C3C3C3',
        limeAccent: '#A40001',
        limeGlow: '#A40001',
      },
      screens: {
        'xs': '420px',
      },
      animation: {
        'marquee-left': 'marqueeLeft 34s linear infinite',
        'marquee-right': 'marqueeRight 34s linear infinite',
        'float': 'floatCard 5s ease-in-out infinite',
        'float-delayed': 'floatCard 6s ease-in-out 1.2s infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        floatCard: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
