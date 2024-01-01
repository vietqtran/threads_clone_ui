<template>
   <div class="flex items-start pt-4">
      <div class="min-w-[48px] relative">
         <CommonAvatar :size="36" />

         <div
            class="bg-purple-700 top-[20px] border-2 border-white right-[8px] rounded-full absolute w-[20px] h-[20px]"
         >
            <div class="w-full h-full grid place-items-center">
               <svg
                  class="stroke-white fill-white w-[8px] h-[8px]"
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
            </div>
         </div>
      </div>
      <div
         class="text-15 pb-3 border-b-black border-opacity-15 border-b-[1px] flex-1 w-full flex items-center justify-between"
      >
         <div>
            <div class="flex items-start gap-2 leading-4">
               <nuxt-link
                  href="/"
                  class="font-medium break-all truncate hover:underline whitespace-pre-wrap"
                  >vietqtran</nuxt-link
               >
               <span class="opacity-50">1d</span>
            </div>
            <div class="opacity-50">
               <span>Followed you</span>
            </div>
         </div>
         <div class="min-w-[120px] flex justify-end">
            <button
               class="py-[6px] border-[1px] whitespace-nowrap leading-5 font-medium border-black dark:border-opacity-25 px-4 dark:border-white rounded-lg border-opacity-20 grid"
               type="button"
            >
               Follow back
            </button>
         </div>
      </div>
   </div>
</template>

<script setup></script>
