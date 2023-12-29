// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ['@pinia/nuxt'],
   pinia: {
      storesDirs: ['./store/**']
   },
   imports: {
      dirs: ['./store']
   },
   devtools: { enabled: true },
   css: ['~/assets/css/main.css'],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {}
      }
   },
   plugins: ['./plugins/theme.ts']
})
