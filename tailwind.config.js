/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5', // Light mode primary color
          dark: '#3b82f6', // Dark mode primary color
        },
        secondary: {
          light: '#ec4899', // Light mode secondary color
          dark: '#db2777', // Dark mode secondary color
        },
        background: {
          light: '#ffffff', // Light mode background color
          dark: '#1f2937', // Dark mode background color
        },
        text: {
          light: '#1f2937', // Light mode text color
          dark: '#ffffff', // Dark mode text color
        },
        accent: {
          light: '#f59e0b', // Light mode accent color
          dark: '#d97706', // Dark mode accent color
        },
        muted: {
          light: '#9ca3af', // Light mode muted color
          dark: '#6b7280', // Dark mode muted color
        },
        'light-gradient-start': '#93A5CF',
        'light-gradient-end': '#E4EfE9',
        'dark-gradient-start': '#09203F',
        'dark-gradient-end': '#537895',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
