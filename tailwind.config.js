export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ['Parisienne', 'cursive'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        shoe: {
          black: '#1F1C26',
          brown: '#42250C',
          liteGrey: '#F4F4F4',
          white: '#FFFFFF',
        },
      },
    },
  },
}