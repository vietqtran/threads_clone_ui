<template>
   <NuxtLayout name="auth">
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
               <LoginInput
                  :value="email"
                  @updateValue="updateEmail"
                  type="email"
                  placeholder="Email"
               />
               <LoginInput
                  :value="username"
                  @updateValue="updateUsername"
                  type="text"
                  placeholder="Username"
               />
               <LoginInput
                  :value="name"
                  @updateValue="updateName"
                  type="text"
                  placeholder="Name"
               />
               <LoginInput
                  :value="password"
                  @updateValue="updatePassword"
                  type="password"
                  placeholder="Password"
               />
               <SubmitButton
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
            <SwitchForm to="/login" title="Log In" />
         </div>
         <div
            class="absolute top-0 z-0 hidden h-1/2 w-full bg-login bg-contain bg-top bg-no-repeat sm:block"
         ></div>
      </div>
   </NuxtLayout>
</template>

<script lang="ts">
import SwitchForm from '~/components/LoginPage/SwitchForm/index.vue'
import LoginInput from '~/components/LoginPage/LoginInput/index.vue'
import SubmitButton from '~/components/LoginPage/SubmitButton/index.vue'
import Or from '~/components/LoginPage/Or/index.vue'

export default {
   head: {
      title: 'ROAST'
   },
   components: {
      LoginInput,
      SubmitButton,
      Or,
      SwitchForm
   },

   data() {
      return {
         email: '',
         name: '',
         username: '',
         password: ''
      }
   },

   methods: {
      updateEmail(value: string) {
         this.$data.email = value
      },

      updatePassword(value: string) {
         this.$data.password = value
      },

      updateName(value: string) {
         this.$data.name = value
      },

      updateUsername(value: string) {
         this.$data.username = value
      },

      login(event: Event) {
         event.preventDefault()
         console.log(this.$data.email, this.$data.password)
      }
   }
}
</script>
