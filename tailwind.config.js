/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'climate': 'Climate Crisis, cursive',
        'manrope': 'Manrope, sans-serif',
        'euph': 'Euphoria Script, cursive',
        'ubuntu': 'Ubuntu, sans-serif'
      },
      colors: {
        bluegreen: '#3CACAE',
        turq: '#C8F4F9',
        lilac: '#EEB5EB',
        orchid: '#C26DBC',
        carafe: '#4E1A3D',
        iris: '#5D3FD3'
      },
    },
  },
  plugins: [],
}
