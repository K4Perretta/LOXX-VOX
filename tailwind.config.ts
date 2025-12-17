import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './index.html',
    './client/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}

export default config
