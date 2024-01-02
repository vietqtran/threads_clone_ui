// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ['@pinia/nuxt'],
   pinia: {
      storesDirs: ['./store/**']
   },
   imports: {
      dirs: ['./store'],
      autoImport: true
   },
   devtools: { enabled: true },
   css: ['~/assets/css/main.css'],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {}
      }
   },
   plugins: [
      {
         src: './plugins/theme.ts',
         mode: 'client'
      }
   ],
   runtimeConfig: {
      public: {
         baseApiUrl: 'https://localhost:7276'
      }
   }
})
