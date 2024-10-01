/** @type {import('tailwindcss').Config} */
// const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, and TSX files inside `src`
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'text': 'font-size, line-height',
        'default': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      },
      transitionDuration: {
        'default': '300ms',
      },
      transitionTimingFunction: {
        // Add default timing function
        'default': 'ease-in-out',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gray': '#D3D3D3',
        'mcgill': '#ed1b2f',
      },
      fontSize: {
        '10xl': '13rem',  // Change this value to your desired size
      },
      fontFamily: {
        'Inter': ['Inter', 'serif'],
        'Lora': ['Lora'],
        'h3': ['ui-monospace'],
        'p': ['Oswald'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#ed1b2f', // Primary color for the theme
          secondary: '#f3f4f6', // Light gray for contrast
          accent: '#f59e0b', // Optional accent color
          neutral: '#3d4451', // Dark gray for neutrality
          'base-100': '#ffffff', // Base background color
          'base-200': '#f9fafb', // Light background color
          'base-300': '#d1d5db', // Slightly darker background color
          info: '#3abff8', // Info color
          success: '#36d399', // Success color
          warning: '#fbbd23', // Warning color
          error: '#f87272', // Error color
        },
      },
      // Include the default DaisyUI light theme as a fallback
      'light',
    ],
  },
  plugins: [
    require('daisyui'),
  ]
};
