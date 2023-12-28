import { defineStore } from 'pinia'

export const postImagesModalStore = defineStore('postImagesModal', {
   state: () => ({
      postId: '',
      images: [] as string[],
      currentIndex: 0,
      isOpened: false
   }),
   actions: {
      open(images: string[], postId: string, currentIndex: number) {
         this.postId = postId
         this.images = images
         this.currentIndex = currentIndex
         this.isOpened = true
         document.body.style.overflow = 'hidden'
      },

      close() {
         this.postId = ''
         this.isOpened = false
         this.images = []
         this.currentIndex = 0
         document.body.style.overflow = 'auto'
      }
   }
})
