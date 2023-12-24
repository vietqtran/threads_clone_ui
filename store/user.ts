import type { AppUser } from '~/types/user.types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
   state: () => ({
      userInfo: null as AppUser | null
   }),
   getters: {
      isAuthenticated: (state) => !!state.userInfo
   },
   actions: {
      login(userInfo: AppUser) {
         this.userInfo = userInfo
      },

      logout() {
         this.userInfo = null
      }
   }
})
