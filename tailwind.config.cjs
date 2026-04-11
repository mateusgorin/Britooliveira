module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1128',
          light: '#141E3C',
          dark: '#050914'
        },
        gold: {
          light: '#E6C68A',
          DEFAULT: '#C5A059',
          dark: '#A6803E',
          bright: '#D4AF37'
        },
        corporate: {
          gray: '#F8F9FA',
          text: '#2D3436'
        }
      },
      letterSpacing: {
        ultra: '0.2em'
      }
    }
  }
};
