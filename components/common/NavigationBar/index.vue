<template>
   <nav
      class="fixed-center-x bottom-0 top-auto h-[68px] w-full bg-white bg-opacity-80 py-1 backdrop-blur-xl dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-xl sm:bottom-auto sm:top-0 sm:h-[74px] sm:max-w-[480px] sm:bg-transparent dark:sm:bg-transparent"
   >
      <ul class="grid h-full w-full grid-cols-5 gap-4">
         <li class="h-full w-full">
            <nuxt-link
               class="group relative grid h-full w-full place-items-center"
               to="/"
            >
               <span
                  class="absolute z-[-1] block h-[80%] w-[80%] rounded-lg duration-100 ease-linear group-hover:h-full group-hover:w-full group-hover:bg-gray-400 group-hover:bg-opacity-20 dark:group-hover:bg-gray-500 dark:group-hover:bg-opacity-20"
               >
               </span>
               <Icon>
                  <svg
                     :class="{
                        'fill-black dark:fill-white dark:stroke-white stroke-black':
                           tab === 'home',
                        'fill-white dark:fill-black': tab !== 'home'
                     }"
                     width="26"
                     height="25"
                     viewBox="0 0 26 25"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M7.6 23.5H4C2.34315 23.5 1 22.1569 1 20.5V11.4351C1 10.2128 1.55885 9.05757 2.51719 8.29889L9.89649 2.45695C11.715 1.01725 14.285 1.01725 16.1035 2.45695L23.4828 8.29889C24.4411 9.05757 25 10.2128 25 11.4351V20.5C25 22.1569 23.6569 23.5 22 23.5H18.4C16.7431 23.5 15.4 22.1569 15.4 20.5V15.9655C15.4 15.346 15.1604 14.7504 14.7313 14.3035C13.7868 13.3196 12.2132 13.3196 11.2687 14.3035C10.8396 14.7504 10.6 15.346 10.6 15.9655V20.5C10.6 22.1569 9.25686 23.5 7.6 23.5Z"
                        fill="inherit"
                        stroke="inherit"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </Icon>
            </nuxt-link>
         </li>
         <li class="h-full w-full">
            <nuxt-link
               class="group relative grid h-full w-full place-items-center"
               to="/"
            >
               <span
                  class="absolute z-[-1] block h-[80%] w-[80%] rounded-lg duration-100 ease-linear group-hover:h-full group-hover:w-full group-hover:bg-gray-400 group-hover:bg-opacity-20 dark:group-hover:bg-gray-500 dark:group-hover:bg-opacity-20"
               >
               </span>
               <Icon>
                  <svg
                     :class="{
                        'stroke-black dark:stroke-white': tab === 'search',
                        'stroke-inherit': tab !== 'search'
                     }"
                     width="23"
                     height="23"
                     viewBox="0 0 23 23"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M16.5 16.225C18.0485 14.6084 19 12.4153 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C12.5552 19 14.8618 17.9351 16.5 16.225ZM16.5 16.225L22 21.725"
                        stroke="inherit"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </Icon>
            </nuxt-link>
         </li>
         <li class="h-full w-full">
            <nuxt-link
               class="group relative grid h-full w-full place-items-center"
               to="/"
            >
               <span
                  class="absolute z-[-1] block h-[80%] w-[80%] rounded-lg duration-100 ease-linear group-hover:h-full group-hover:w-full group-hover:bg-gray-400 group-hover:bg-opacity-20 dark:group-hover:bg-gray-500 dark:group-hover:bg-opacity-20"
               >
               </span>
               <Icon>
                  <svg
                     stroke="inherit"
                     width="22"
                     height="22"
                     viewBox="0 0 22 22"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M19.5 2.5L11.5 10.5M10.5 1.5H7C3.68629 1.5 1 4.18629 1 7.5V15C1 18.3137 3.68629 21 7 21H14.5C17.8137 21 20.5 18.3137 20.5 15V11.5"
                        stroke="inherit"
                        stroke-width="2"
                        stroke-linecap="round"
                     />
                  </svg>
               </Icon>
            </nuxt-link>
         </li>
         <li class="h-full w-full">
            <nuxt-link
               class="group relative grid h-full w-full place-items-center"
               to="/"
            >
               <span
                  class="absolute z-[-1] block h-[80%] w-[80%] rounded-lg duration-100 ease-linear group-hover:h-full group-hover:w-full group-hover:bg-gray-400 group-hover:bg-opacity-20 dark:group-hover:bg-gray-500 dark:group-hover:bg-opacity-20"
               >
               </span>
               <Icon>
                  <svg
                     :class="{
                        'fill-black dark:fill-white dark:stroke-white stroke-black':
                           tab === 'notification'
                     }"
                     stroke="inherit"
                     width="23"
                     height="21"
                     viewBox="0 0 23 21"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M1 7.327C1 11.6732 4.72177 15.9587 10.533 19.6143C10.8557 19.8071 11.2394 20 11.5 20C11.7701 20 12.1548 19.8071 12.467 19.6143C18.2773 15.9587 22 11.6723 22 7.327C22 3.5992 19.3702 1 15.9596 1C13.9847 1 12.4355 1.893 11.5 3.2344C10.5855 1.9044 9.02582 1 7.04036 1C3.64027 1 1 3.5992 1 7.327Z"
                        stroke="inherit"
                        stroke-width="2"
                     />
                  </svg>
               </Icon>
            </nuxt-link>
         </li>
         <li class="h-full w-full">
            <nuxt-link
               class="group relative grid h-full w-full place-items-center"
               to="/"
            >
               <span
                  class="absolute z-[-1] block h-[80%] w-[80%] rounded-lg duration-100 ease-linear group-hover:h-full group-hover:w-full group-hover:bg-gray-400 group-hover:bg-opacity-20 dark:group-hover:bg-gray-500 dark:group-hover:bg-opacity-20"
               >
               </span>
               <Icon>
                  <svg
                     :class="{
                        'fill-black dark:fill-white dark:stroke-white stroke-black':
                           tab === 'user'
                     }"
                     stroke="inherit"
                     width="22"
                     height="23"
                     viewBox="0 0 22 23"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M15.25 5.5C15.25 7.84721 13.3472 9.75 11 9.75C8.65279 9.75 6.75 7.84721 6.75 5.5C6.75 3.15279 8.65279 1.25 11 1.25C13.3472 1.25 15.25 3.15279 15.25 5.5Z"
                        stroke="inherit"
                        stroke-width="2"
                        stroke-linecap="round"
                     />
                     <path
                        d="M18.8642 22H3.13585C2.0769 22 1.21458 21.1665 1.42588 20.1288C1.93549 17.6261 3.85858 13.5 11 13.5C18.1415 13.5 20.0646 17.6261 20.5742 20.1288C20.7855 21.1665 19.9232 22 18.8642 22Z"
                        stroke="inherit"
                        stroke-width="2"
                        stroke-linecap="round"
                     />
                  </svg>
               </Icon>
            </nuxt-link>
         </li>
      </ul>
   </nav>
</template>

<script>
import Icon from './Icon.vue'

export default {
   components: {
      Icon
   },
   data() {
      return {
         tab: 'home'
      }
   }
}
</script>

<style scope></style>
