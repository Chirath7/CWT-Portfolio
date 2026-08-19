/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E7004C',
          hover: '#AB1E40',
          light: '#FF2D6D',
          dark: '#B8003D',
          subtle: '#FFF0F5',
          glow: 'rgba(231, 0, 76, 0.4)',
        },
        dark: {
          DEFAULT: '#0D0D11',
          2: '#16161E',
          3: '#1E1D28',
          border: '#272738',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8F9FC',
          subtle: '#F2F4F7',
          border: '#EAECF0',
        },
        content: {
          DEFAULT: '#0D0D11',
          secondary: '#475467',
          muted: '#81818B',
          light: '#F9FAFB',
        },
        accent: {
          blue: '#3D96F4',
          green: '#5CC97B',
          yellow: '#F3C33A',
        },
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'sans-serif'],
        body: ['Inter', 'Poppins', 'ui-sans-serif', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        'brand-glow': '0 10px 26px -14px rgba(231, 0, 76, 0.65)',
        'nav-pill': '0 12px 30px -20px rgba(0, 0, 0, 0.18)',
        'card-soft': '0 2px 10px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
