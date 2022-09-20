/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      REGULAR: 'Inter_400Regular',
      SEMI_BOLD: 'Inter_600SemiBold',
      BOLD: 'Inter_700Bold',
      BLACK: 'Inter_900Black'
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/Fundo.png')",
        nlwGradient: "linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)",
        gameGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      colors: {
        BACKGROUND_900: '#121214',
        BACKGROUND_800: '#18181B',

        TEXT: '#FFFFFF',

        CAPTION_500: '#71717A',
        CAPTION_400: '#A1A1AA',
        CAPTION_300: '#D4D4D8',

        SHAPE: '#2A2634',

        PRIMARY: '#8B5CF6',
        PRIMARY_HOVER: '#7c3aed',
        SUCCESS: '#34D399',
        ALERT: '#F87171',

        FOOTER: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)'],
        OVERLAY: 'rgba(0,0,0,0.6)',
      }
    },
  },
  plugins: [],
}
