import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
   if (process.client) {
      const theme = ref(localStorage.getItem('THREADS_CLONE_THEME') || '')

      watch(theme, (newTheme, oldTheme) => {
         if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
         } else {
            document.documentElement.classList.remove('dark')
         }
         localStorage.setItem('THREADS_CLONE_THEME', newTheme)
      })

      if (theme.value === 'dark') {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }

      watch(
         () => localStorage.getItem('THREADS_CLONE_THEME'),
         (newTheme) => {
            theme.value = newTheme || ''
         }
      )
   }
})
