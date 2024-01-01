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
                     class="h-full w-full"
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
                  @submit.prevent="login"
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
                     title="Sign up"
                     :clickable="
                        email !== '' &&
                        password !== '' &&
                        name !== '' &&
                        username !== ''
                     "
                  />
               </form>
               <Or />
               <LoginPageSwitchForm to="/login" title="Log In" />
            </div>
            <div
               class="absolute top-0 z-0 hidden h-1/2 w-full bg-login bg-contain bg-top bg-no-repeat sm:block"
            ></div>
         </div>
      </div>
   </NuxtLayout>
</template>

<script lang="ts" setup>
import { LoginPageLoginInput } from '~/.nuxt/components'

const email = ref('')
const name = ref('')
const username = ref('')
const password = ref('')

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

const login = (event: Event) => {
   event.preventDefault()
   console.log(email.value, password.value)
}
</script>
