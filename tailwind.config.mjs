export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green:       '#223927',
          'green-dk':  '#1a2d1f',
          gold:        '#ac884d',
          'gold-dk':   '#8f6f39',
          bg:          '#faf8f4',
          text:        '#1a1a18',
          muted:       '#5c5c50',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm:  '2px',
        md:  '4px',
        lg:  '6px',
        xl:  '8px',
        '2xl': '12px',
      },
      boxShadow: {
        card:        '0 2px 12px 0 rgba(34,57,39,0.08)',
        'card-hover':'0 6px 28px 0 rgba(34,57,39,0.15)',
        gold:        '0 4px 20px rgba(172,136,77,0.30)',
      },
    },
  },
  plugins: [],
};
