import { defineStore } from 'pinia'

export const avatarModalStore = defineStore('avatarModal', {
   state: () => ({
      isOpened: false,
      image: ''
   }),
   actions: {
      open(image: string) {
         this.image = image
         this.isOpened = true
         document.body.style.overflow = 'hidden'
      },

      close() {
         this.isOpened = false
         this.image = ''
         document.body.style.overflow = 'auto'
      }
   }
})
