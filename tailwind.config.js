/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        "antic-dark":"#A06056",
        "antic-light":"#F3EEE8",
        "antic-gray":"#706458",
        "antic-black":"#121212",
        "antic-brown":"#534B42"
      },
      margin:{
        "antic-x":"149.9px",
        "antic-y":"55px",
        "15":"15px",
        "22":"22px",
        "30":"30px",
        "32":"32px",
        "41":"41px",
        "50":"50px",
        "25":"25px",
        "70":"70px",
        "150":"150px"
        
      },
      padding:{
        "antic-l":"2.5%",
        "antic-x":"149.9px",
        "antic-y":"55px",
        "150":"150px",
        "14-5":"14.5px",
        "15":"15px",
        "10-5":"10.5px",
        "126":"126px",
        "70":"70px",
        "30":"30px"
     
        
      },
      width:{
        "420":"420px",
        "50":"50px",
        "143.11":"143.11px",
        "145.5":"145.5px",
        "155.5":"155.5px",
        "311":"311px",
        "375":"375px",
        "261":"261px",
        "290":"290px",
        "296.1":"296.1px",
        "458":"458px"
        
      },
      height:{
        "50":"50px",
        "175":"175px",
        "232.5":"232.5px",
        "350":"350px",
        "550":"550px"
      },
      opacity:{
        "66":"66%"
      },
      gap:{
        "16":"16px",
        "12":"12px",
        "22":"22px",
        "32":"32px"
      },
      fontSize:{
        '4xl':'34px',
        'lg':'18px',
        'sm':'14px',
        '17':'17px',
        '18':'18px',
        '22':'22px',
        '25':'25px',
        '45':'45px',
        '50':'50px',
        '55':'55px',
        '34':'34px',
        '35':"35px"
      }
    },
    fontFamily: {
      Merriweather:["Merriweather, serif"],
      Varta:["Varta, sans-serif"],
      Karla:["Karla, sans-serif"],
      Lato:["Lato, sans-serif"]
    },
    container:{
      center:true
    },
    lineHeight:{
      "25":"25px",
      "70":"70px"
    },
    letterSpacing:{
      "2":"2px",
      "02":"-0.2px",
      "04":"-0.4px",
      "03":"0.3px"
    },
    backgroundImage:{
      "hero-bg": "url('/img/hero-bg.jpg')",
      "none":"background-none"
    },
    borderRadius:{
      "px":"1px",
      "full":"100%"
    },
  },
  plugins: [],
}

