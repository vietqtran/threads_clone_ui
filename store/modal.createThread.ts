import { defineStore } from 'pinia'

export const createThreadModalStore = defineStore('createThreadModal', {
   state: () => ({
      isOpened: false
   }),

   actions: {
      open() {
         this.isOpened = true
         document.body.style.overflow = 'hidden'
      },

      close() {
         this.isOpened = false
         document.body.style.overflow = 'auto'
      }
   }
})
