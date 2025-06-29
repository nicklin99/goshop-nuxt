import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import sfTypography from '@storefront-ui/typography';

/** @type {import('tailwindcss').Config} */
export default {
   presets: [tailwindConfig],
   plugins: [
    sfTypography
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#FF6600',
          800: '#FF6600',
          900: '#7C2D12',
        },
      },
      gridTemplateAreas: {
        'product-page': ['left-top right', 'left-bottom right'],
      },
      gridTemplateColumns: {
        'product-page': 'minmax(56%, 500px) auto',
      },
      gridTemplateRows: {
        'category-sidebar': 'min-content auto min-content',
      },
      screens: {
        '4xl': '1920px',
        '3xl': '1536px',
        '2xl': '1366px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '376px',
        '2xs': '360px',
      },
    },
  },
  content: [
    "./app.vue",
    "../node_modules/goshop-ui/src/**/*.{vue,js,ts,jsx,tsx}",
    "../node_modules/@storefront-ui/vue/**/*.js"
  ],
};
