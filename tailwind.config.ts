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
        // Logo paleti: siyah + krem
        ink: '#0B0B0B',
        inkSurface: '#161616',
        cream: '#F8F0DB',
        creamDeep: '#EFE6CF',
        // Bölüm tonuna göre değişen vurgu (koyu zeminde krem, açık zeminde siyah)
        accent: 'rgb(var(--accent) / <alpha-value>)',
        onAccent: 'rgb(var(--on-accent) / <alpha-value>)',
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
