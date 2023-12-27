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
      },

      close() {
         this.isOpened = false
         this.image = ''
      }
   }
})
