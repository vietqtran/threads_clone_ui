<template>
   <NuxtLayout name="auth">
      <div>
         <NuxtLoadingIndicator />
         <div class="relative grid h-[100vh] max-w-[100vw] place-items-center">
            <div
               class="z-10 grid w-full max-w-[416px] place-items-center px-4 sm:mt-40"
            >
               <div class="my-5 aspect-square w-[60px] sm:hidden">
                  <img
                     class="w-full h-full"
                     src="/images/ThreadsBlack.svg"
                     alt="Logo"
                  />
               </div>
               <div class="py-3 text-center text-black dark:text-white">
                  <h1 class="font-bold">Log in with your Threads account</h1>
               </div>
               <form
                  @submit.prevent="login"
                  class="w-full max-w-[368px] text-black"
               >
                  <LoginPageLoginInput
                     :value="email"
                     @updateValue="updateEmail"
                     type="email"
                     placeholder="Username, phone or email"
                  />
                  <LoginPageLoginInput
                     :value="password"
                     @updateValue="updatePassword"
                     type="password"
                     placeholder="Password"
                  />
                  <LoginPageSubmitButton
                     v-if="!loading"
                     title="Log in"
                     :clickable="email !== '' && password !== ''"
                  />
                  <LoginPageLoadingSpinner v-else />
               </form>
               <div class="py-2 text-center text-gray-400">
                  <nuxt-link to="/">Forgot password?</nuxt-link>
               </div>
               <LoginPageOr />
               <LoginPageSwitchForm to="/signup" title="Sign Up" />
            </div>
            <div
               class="absolute top-0 z-0 hidden w-full bg-top bg-no-repeat bg-contain h-1/2 bg-login sm:block"
            ></div>
         </div>
      </div>
   </NuxtLayout>
</template>

<script lang="ts" setup>
import type { AppUser } from '~/types/user.types'

const userStore = useUserStore()

const config = useRuntimeConfig()
const loading = ref(false)

const email = ref('')
const password = ref('')

const updateEmail = (value: string) => {
   email.value = value
}

const updatePassword = (value: string) => {
   password.value = value
}

const login = async (event: Event) => {
   event.preventDefault()
   loading.value = true

   const { data: res, error } = await useFetch<AppUser>(
      `${config.public.baseApiUrl}/api/Authentication/login`,
      {
         method: 'POST',
         body: JSON.stringify({
            email: email.value,
            password: password.value
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }
   )

   if (error.value) {
      console.error('An error occurred:', error.value)
   } else if (res.value) {
      userStore.login(res.value)
      await navigateTo({ path: '/' })
   } else {
      console.error('Invalid response received')
   }

   loading.value = false
}
</script>
