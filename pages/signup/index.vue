<template>
   <NuxtLayout name="auth">
      <div class="h-full">
         <NuxtLoadingIndicator />
         <div class="relative grid w-full h-full place-items-center">
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
                  <h1 class="font-bold">
                     Sign up to see photos from your friends.
                  </h1>
               </div>
               <form
                  @submit.prevent="signup"
                  class="w-full max-w-[368px] text-black"
               >
                  <LoginPageLoginInput
                     :value="email"
                     @updateValue="updateEmail"
                     type="email"
                     placeholder="Email"
                  />
                  <LoginPageLoginInput
                     :value="username"
                     @updateValue="updateUsername"
                     type="text"
                     placeholder="Username"
                  />
                  <LoginPageLoginInput
                     :value="name"
                     @updateValue="updateName"
                     type="text"
                     placeholder="Name"
                  />
                  <LoginPageLoginInput
                     :value="password"
                     @updateValue="updatePassword"
                     type="password"
                     placeholder="Password"
                  />
                  <LoginPageSubmitButton
                     v-if="!loading"
                     title="Sign up"
                     :clickable="
                        email !== '' &&
                        password !== '' &&
                        name !== '' &&
                        username !== ''
                     "
                  />
                  <LoginPageLoadingSpinner v-else />
               </form>
               <LoginPageOr />
               <LoginPageSwitchForm to="/login" title="Log In" />
            </div>
            <div
               @click="createdSucceedModal = false"
               v-if="createdSucceedModal"
               class="fixed top-0 bottom-0 left-0 right-0 z-50 grid w-full h-full px-3 place-items-center bg-black/60"
            >
               <div
                  @click.stop
                  class="max-w-[300px] dark:border-[1px] dark:border-white/5 w-full p-5 dark:bg-[#181818] bg-white rounded-lg"
               >
                  <div class="text-center">
                     <p>
                        Sign up success! Please
                        <nuxt-link to="/login">Log in</nuxt-link>
                     </p>
                  </div>
                  <div class="w-full pt-5">
                     <nuxt-link
                        to="/login"
                        class="block w-full py-2 text-sm font-medium text-center text-white bg-black rounded-lg dark:bg-white dark:text-black"
                        >Login now</nuxt-link
                     >
                  </div>
               </div>
            </div>
         </div>
      </div>
   </NuxtLayout>
</template>

<script lang="ts" setup>
import type { SignUpResponse } from '~/types/auth.response.types'

const config = useRuntimeConfig()
const loading = ref(false)

const email = ref('')
const name = ref('')
const username = ref('')
const password = ref('')

const createdSucceedModal = ref(false)

const updateEmail = (value: string) => {
   email.value = value
}

const updatePassword = (value: string) => {
   password.value = value
}

const updateName = (value: string) => {
   name.value = value
}

const updateUsername = (value: string) => {
   username.value = value
}

const signup = async (event: Event) => {
   event.preventDefault()
   loading.value = true

   console.log(email.value, username.value, name.value, password.value)

   const { data: res, error } = await useFetch<SignUpResponse>(
      `${config.public.baseApiUrl}/api/Authentication/register`,
      {
         method: 'POST',
         body: JSON.stringify({
            username: username.value,
            password: password.value,
            email: email.value,
            name: name.value
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }
   )

   if (error.value) {
      console.error('An error occurred:', error.value)
   } else if (res.value) {
      if (res.value.succeed) {
         createdSucceedModal.value = true
         email.value = ''
         username.value = ''
         name.value = ''
         password.value = ''
      } else {
         console.error('Error while create account')
      }
   } else {
      console.error('Invalid response received')
   }

   loading.value = false
}
</script>
