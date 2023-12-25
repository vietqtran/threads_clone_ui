<template>
   <div
      ref="element"
      class="absolute right-0 top-0 aspect-square h-full cursor-pointer sm:relative select-none"
   >
      <div
         @click="show = !show"
         class="group grid place-items-center w-full h-full active:scale-90 duration-100 ease-linear"
      >
         <span>
            <svg
               aria-label="More"
               role="img"
               viewBox="0 0 24 24"
               class="relative block h-[24px] w-[24px] fill-gray-400 duration-100 ease-linear group-hover:fill-black dark:fill-gray-500 dark:group-hover:fill-white"
               style="--fill: currentColor; --height: 24px; --width: 24px"
            >
               <title>More</title>
               <rect class="h-[2.5px] w-[21px]" rx="1.25" x="3" y="7"></rect>
               <rect class="h-[2.5px] w-[14px]" rx="1.25" x="10" y="15"></rect>
            </svg>
         </span>
      </div>

      <div
         v-show="show"
         @click="(event) => event.preventDefault()"
         class="dropdown-shadow more-dropdown absolute right-[16px] top-[60px] z-40 w-[190px] overflow-hidden rounded-2xl border-[.1px] border-gray-100 bg-white duration-300 dark:border-gray-800 dark:bg-black"
      >
         <ul class="w-full cursor-pointer">
            <li
               @click="console.log('Switch appearance')"
               class="border-b px-4 py-[11px] font-semibold"
            >
               Switch appearance
            </li>
            <li
               @click="console.log('Settings')"
               class="border-b px-4 py-[11px] font-semibold"
            >
               Settings
            </li>
            <li
               @click="console.log('About')"
               class="border-b px-4 py-[11px] font-semibold"
            >
               About
            </li>
            <li
               @click="console.log('Report a problem')"
               class="px-4 py-[11px] border-b font-semibold"
            >
               Report a problem
            </li>
            <li
               @click="console.log('Log out')"
               class="px-4 py-[11px] font-semibold"
            >
               Log out
            </li>
         </ul>
      </div>
   </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export default {
   setup() {
      const element = ref<HTMLElement | null>(null)
      const show = ref(false)

      const handleClickOutside = () => {
         show.value = false
      }

      const isClickOutside = (event: MouseEvent) => {
         if (element.value && !element.value.contains(event.target as Node)) {
            handleClickOutside()
         }
      }

      onMounted(() => {
         window.addEventListener('click', isClickOutside)
      })

      onUnmounted(() => {
         window.removeEventListener('click', isClickOutside)
      })

      return { element, show, isClickOutside }
   }
}
</script>
