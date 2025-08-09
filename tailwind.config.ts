import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0C3B2E',
          offwhite: '#F7F7F5',
          black: '#000000',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        space: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        botanical: "url('/textures/botanical.svg')",
        botanicalDark: "url('/textures/botanical-dark.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;


