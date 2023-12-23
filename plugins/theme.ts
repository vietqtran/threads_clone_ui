import { defineNuxtPlugin } from '#app'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
   if (process.client) {
      const route = useRoute()

      watch(
         () => route.query.theme,
         (newTheme, oldTheme) => {
            if (newTheme === 'dark') {
               document.documentElement.classList.add('dark')
            } else {
               document.documentElement.classList.remove('dark')
            }
         },
         { immediate: true }
      )
   }
})
