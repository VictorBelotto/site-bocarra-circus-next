import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'hd' : '1280px',
        'grande' : '1380px',
        'maxW' : '92%'
      },
      screens: {
        'hd' : '1280px',
        'grande': '1600px'
      },
      colors: {
        red: {
          default: '#d03438',
          hover: '#ba2c30'
        },
        blue: {
          default: '#00162B',
          hover: '#100a20',
          contraste: '#001A30',
          text: '#001A30'
        },
        white: {
          contraste: '#ACACAC',
          fundo: '#f9f9f9',
        },
        gray: {
          text: '#4C4C4C'
        },
        black: {
          text: '#050411'
        },
  
      },
    },
  },
  plugins: [],
};
export default config;
