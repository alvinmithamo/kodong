module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}'],
       theme: {
         extend: {
           colors: {
             saffron: {
               50: '#FFF5E6',
               600: '#F4A261',
               700: '#E76F51'
             },
             myrtle: {
               700: '#2A9D8F',
               900: '#264653'
             }
           },
           fontFamily: {
             bungee: ['Bungee', 'sans-serif'],
             roboto: ['Roboto', 'sans-serif']
           },
           backgroundImage: {
             'luo-pattern': "url('/src/assets/luo-pattern.png')"
           }
         }
       },
       plugins: []
     };