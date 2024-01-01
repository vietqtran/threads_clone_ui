<template>
   <nuxt-link
      :to="props.to"
      class="flex w-full items-center justify-between rounded-xl border-[1px] border-gray-300 py-5 pl-5 pr-3"
   >
      <div class="flex items-center">
         <div class="aspect-square w-[45px] rounded-lg bg-[#181818]">
            <img class="h-full w-full" src="/icons/Threads.svg" alt="" />
         </div>
         <div class="grid flex-1 place-items-center pl-5">
            <h2 class="font-bold dark:text-white">{{ props.title }}</h2>
         </div>
      </div>
      <div class="p-2">
         <span>
            <svg
               aria-label="Log in"
               role="img"
               viewBox="0 0 24 24"
               class="relative block h-[16px] w-[16px] rotate-180 fill-none stroke-current stroke-2 text-gray-600 dark:text-white"
               style="--fill: currentColor; --height: 16px; --width: 16px"
               strokeLinejoin="round"
               strokeLinecap="round"
            >
               <title>Log in</title>
               <polyline points="16.502 3 7.498 12 16.502 21"></polyline>
            </svg>
         </span>
      </div>
   </nuxt-link>
</template>

<script lang="ts" setup>
const props = defineProps({
   title: {
      type: String,
      required: true
   },
   to: {
      type: String,
      required: true
   }
})
</script>
