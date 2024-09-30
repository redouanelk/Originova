// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vesp/nuxt-fontawesome',
    'nuxt-swiper',
  ],
  googleFonts:{
    families:{
      Merriweather: true,
      Varta:true,
      Karla:true,
      Lato: true
    }
  },
 

})