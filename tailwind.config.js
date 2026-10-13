/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          primaryHover: 'var(--color-primary-hover)',
          onPrimary: 'var(--color-on-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          darkBg: 'var(--color-dark-bg)',
          darkSurface: 'var(--color-dark-surface)',
          darkText: 'var(--color-dark-text)',
          darkMuted: 'var(--color-dark-muted)',
          lightBg: 'var(--color-light-bg)',
          lightText: 'var(--color-light-text)',
          link: 'var(--color-link)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'ChunkFiveEx', 'Alfa Slab One', 'Rockwell', 'serif'],
        body: ['var(--font-body)', 'Montserrat', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'Raleway', 'sans-serif'],
      },
      borderRadius: {
        button: 'var(--border-radius-button, 0px)',
        input: 'var(--border-radius-input, 0px)',
      },
    },
  },
  plugins: [],
};
