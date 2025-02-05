/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "primary":"#090A0A",         
        "secondary":"#111314",         
      },
      fontFamily: {
        heading: [
          'cpmono',
          'Ubuntu',
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        body: [
          'cpmono',
          'Ubuntu',
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        'oxanium': ['"Oxanium"', 'cursive'],
        'cpmono-heading': ['CPMono-Head', 'monospace'],
        'cpmono-normal': ['CPMono-normal', 'monospace'],
      },
      textColor:{
        "subtle":"#B4B4B4",
        "subtle2":"#666666",
        "subtle3":"#808080",
        "mintNft":"#0092FF",
        "mcap":"#B580FF",
        "listed":"#FF80D4",
        "nav":"#A9ADB2",
        "orange":"#FB933C",
        "subtle":"#B4B4B4",
        "subtle2":"#666666",
        "subtle3":"#808080",
      },
      borderColor:{
        "primary":"#404040",
        "secondary":"#0E1113",
      },
      colors:{
        priceUp:"#8EEFC6",
        priceDown:"#EF8EAB",
        "all-nft-light":"#75EBAC",
        "buy-nft-light":"#75B0EB",
        "all-nft-dark":"#004D24",
        "all-nft-dark-main":"#003318",
        "buy-nft-dark":"#002E5C"
      },
      boxShadow:{
        'text-priceUp': '0px 0px 10px rgba(0, 255, 144, 0.60)',
        'text-priceDown': '2px 1px 12px rgba(255, 0, 77, 0.80)',
        "active-nft":"5px 4px 20px 4px rgba(251, 168, 60, 0.20)",
        "current-nft":"5px 4px 20px 4px rgba(251,60,98,0.19)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        lg: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      },
    }, 
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-priceUp': {
          color: '#8EEFC6', 
          'text-shadow': '0px 0px 10px rgba(0, 255, 144, 0.60)',
          'font-family': 'Oxanium, sans-serif',
          // 'font-size': '14px',
          'font-style': 'normal',
          'font-weight': '700',
          'line-height': '24px',
          'leading-trim': 'both',
          'text-edge': 'cap',
        },
        '.text-priceDown': {
          color: '#EF8EAB', 
          'text-shadow': '2px 1px 12px rgba(255, 0, 77, 0.80)',
          'font-family': 'Oxanium, sans-serif',
          // 'font-size': '14px',
          'font-style': 'normal',
          'font-weight': '700',
          'line-height': '24px',
          'leading-trim': 'both',
          'text-edge': 'cap',
        },
        '.text-most-active-nft': {
          color: '#48A4FF',
          'font-family': 'Oxanium, sans-serif',
          'font-size': '18px',
          'font-style': 'normal',
          'font-weight': '700',
          'line-height': '10px', /* 120% */
          'text-shadow': '0px 0px 10px #0080FF',
          'leading-trim': 'both',
          'text-edge': 'cap',
        },
      });
    },

  ],
}