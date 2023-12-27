import { defineStore } from 'pinia'

export const postImagesModalStore = defineStore('postImagesModal', {
   state: () => ({
      isOpened: false,
      images: [] as string[]
   }),
   actions: {
      open(images: string[]) {
         console.log('open', images)
         this.images = images
         this.isOpened = true
      },

      close() {
         console.log('close')
         this.isOpened = false
         this.images = []
      }
   }
})
