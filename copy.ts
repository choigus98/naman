/** @type {import('tailwindcss').Config} */
//@ts-nocheck

module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      zIndex: {
        //Layer - Cover
        100: 100, //layer1
        200: 200, //layer2
        300: 300, //layer3
        400: 400, //...4
        500: 500, //...5

        //Layer Element
        1: 1, //CustomMarker, MapController

        10: 10, //Map , Slider Desc
        20: 20, //Header, Slider header pagination
        30: 30, //summary

        99: 99, //TopBanner

        150: 150, //BackDrop
        170: 170, //Loading, Spinner, Modal, BottomSheet, Slider Container

        199: 199 //Toast
      },
      colors: {
        // brand color ff7f00
        main: {
          '010': '#FF7F00'
        },
        gray: {
          '010': '#FFFFFF',
          '020': '#F0F4F7',
          '030': '#DEE4E9',
          '040': '#CCD3DB',
          '050': '#B8C3D0',
          '060': '#6D7D90',
          '070': '#4A5766',
          '080': '#263238',
          '090': '#000000'
        },
        dim: {
          '050': 'rgba(0, 0, 0, 0.65)',
          '060': 'rgba(0, 0, 0, 0.75)'
        }
      },
      screens: {
        min: '320px',
        max: '430px'
      },
      fontSize: {
        36: '36px',
        30: '30px',
        24: '24px',
        20: '20px',
        17: '17px',
        16: '16px',
        15: '15px',
        14: '14px',
        12: '12px',
        10: '10px'
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700
      },
      lineHeight: {
        54: '54px',
        40: '40px',
        34: '34px',
        30: '30px',
        26: '26px',
        24: '24px',
        22: '22px',
        18: '18px',
        12: '12px'
      },

      backgroundColor: {
        'white-80': 'rgba(255, 255, 255, 0.8)'
      },

      textColor: ({ theme }) => ({
        'main-010': theme('colors.main.010')
      }),

      borderColor: ({ theme }) => ({
        '010': theme('colors.gray.010'),
        '020': theme('colors.gray.020'),
        '030': theme('colors.gray.030'),
        '050': theme('colors.gray.050'),
        '060': theme('colors.gray.060'),
        '070': theme('colors.gray.070'),
        '080': theme('colors.gray.080'),
        '090': theme('colors.gray.090')
      })
    }
  },
  plugins: [require('flowbite/plugin')]
}
