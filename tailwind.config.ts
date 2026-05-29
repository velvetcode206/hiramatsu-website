import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#222222' },
        secondary: { DEFAULT: '#eeeeee' },
        accent: { DEFAULT: '#592C63' },
      },
      fontFamily: { roboto: ['Roboto', 'sans-serif'] },
    },
  },
}
