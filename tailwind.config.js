/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'transparent': "transparent",
      'primary': "#c59326",
      'secondary': "#25c1f1",
      'white': '#ffffff',
      'gray': '#e0e0e0',
      'text-accent': "#25afc6",
      'black': "#000000"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-image': "url('/hero.jpg')",
        'gallery-image': "url('/gallery.jpg')",
        'contact-image': "url('/contact.jpg')",
        'footer-image': "url('/footer.jpg')"
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
};
