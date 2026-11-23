/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wow: {
          gold: '#f8b700',
          'gold-light': '#ffe27d',
          'gold-dark': '#9e6d07',
          'gold-border': '#694e1d',
          amber: '#d97706',
          horde: '#991b1b',
          'horde-glow': '#ef4444',
          alliance: '#1d4ed8',
          'alliance-glow': '#3b82f6',
          void: '#05070d',
          stone: '#0c101d',
          'stone-card': '#101526',
          'stone-border': '#1e293b',
          rune: '#00e5ff',
          fel: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['WoWFont', 'Cinzel', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', 'WoWFont', 'Cinzel', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'wow-gold': '0 0 20px rgba(248, 183, 0, 0.25)',
        'wow-gold-lg': '0 0 35px rgba(248, 183, 0, 0.35)',
        'wow-horde': '0 0 25px rgba(185, 28, 28, 0.4)',
        'wow-card': '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(120, 85, 30, 0.35)',
        'wow-card-hover': '0 15px 35px -5px rgba(0, 0, 0, 0.9), 0 0 20px rgba(248, 183, 0, 0.25), 0 0 0 1px rgba(248, 183, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
