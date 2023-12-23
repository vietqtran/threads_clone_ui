<template>
   <NuxtLayout name="auth">
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
               <h1 class="font-bold">Log in with your Threads account</h1>
            </div>
            <form
               @submit.prevent="login"
               class="w-full max-w-[368px] text-black"
            >
               <LoginInput
                  :value="email"
                  @updateValue="updateEmail"
                  type="email"
                  placeholder="Username, phone or email"
               />
               <LoginInput
                  :value="password"
                  @updateValue="updatePassword"
                  type="password"
                  placeholder="Password"
               />
               <SubmitButton
                  title="Log in"
                  :clickable="email !== '' && password !== ''"
               />
            </form>
            <div class="py-2 text-center text-gray-400">
               <nuxt-link to="/">Forgot password?</nuxt-link>
            </div>
            <Or />
            <SwitchForm to="/signup" title="Sign Up" />
         </div>
         <div
            class="absolute top-0 z-0 hidden h-1/2 w-full bg-login bg-contain bg-top bg-no-repeat sm:block"
         ></div>
      </div>
   </NuxtLayout>
</template>

<script>
import SwitchForm from '~/components/common/Auth/SwitchForm'
import LoginInput from '~/components/LoginPage/LoginInput'
import SubmitButton from '~/components/LoginPage/SubmitButton'
import Or from '~/components/common/Auth/Or'

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
         password: ''
      }
   },

   methods: {
      updateEmail(value) {
         this.$data.email = value
      },

      updatePassword(value) {
         this.$data.password = value
      },

      login(event) {
         event.preventDefault()
         console.log(this.$data.email, this.$data.password)
      }
   }
}
</script>
