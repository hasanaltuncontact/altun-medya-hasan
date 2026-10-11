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
        obsidian: '#050505',
        surfaceDark: '#0A0A0A',
        surfaceDarker: '#0E0E0E',
        offWhite: '#F7F6F2',
        offWhiteAlt: '#F1F0EA',
        warmBeige: '#D9D0C1',
        softBeige: '#E6DED1',
        darkBeige: '#A89D8D',
        limeAccent: '#B33A06',
        limeGlow: '#C84408',
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
