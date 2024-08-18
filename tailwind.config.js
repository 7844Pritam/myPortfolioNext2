/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81)",
      "green-md": "0px 20px 40px -15px rgba(13, 183, 96, 0.81)",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      primary: "#40534C",
      secondary: "#1A3636",
      middle: "#D6BD98",
      black: {
        900: "#000000",
        500: "#4F5665",
        600: "#0B132A",
      },
      orange: {
        100: "#FFECEC",
        500: "#F53855",
      },
      green: {
        500: "#2FAB73",
        main: "#0DB760",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
    },
    extend: {
      animation: {
        blinkColor: 'blinkColor 3s infinite',
         'border-run': 'borderRun 3s linear infinite'
      },
      keyframes: {
        blinkColor: {
          '0%': { color: '#40534C' },
        
          '100%': { color: '#D6BD98' },
        },
        borderRun: {
          '0%': {
            // 'border-color': '#40534C',
            // 'border-width': '0 0 0 4px',
            'border-style': 'solid',
            'transform': 'translateX(-5%)'
          },
          '25%': {
            // 'border-width': '4px 0 0 4px',
            // 'border-style': 'solid',
            'transform': 'translateY(-5%)'
          },
          '50%': {
            // 'border-width': '4px 4px 0 4px',
            // 'border-style': 'solid',
            'transform': 'translateX(5%)'
          },
          '75%': {
            // 'border-width': '4px 4px 4px 0',
            // 'border-style': 'solid',
            'transform': 'translateY(5%)'
          },
          '100%': {
            // 'border-width': '4px',
            // 'border-style': 'solid',
            'transform': 'translateX(-5%)'
          }
        }
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
