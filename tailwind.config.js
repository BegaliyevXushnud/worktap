/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1026px', 
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    boxShadow: {
      'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
      'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.3)',
    },
  },
  plugins: [],
};
