<template>
   <div
      class="sticky z-30 left-0 right-0 top-0 flex w-full items-center bg-white dark:bg-black"
   >
      <div
         class="container mx-auto flex h-[60px] max-w-[1230px] items-center justify-center bg-transparent sm:h-[74px] sm:justify-between"
      >
         <nuxt-link
            to="/"
            class="group grid aspect-square h-full place-items-center p-3"
         >
            <div
               class="aspect-square h-[32px] w-[32px] cursor-pointer duration-100 ease-linear group-hover:scale-110"
            >
               <img
                  class="hidden h-full w-full object-contain dark:block"
                  src="/images/Threads.svg"
                  alt=""
               />
               <img
                  class="h-full w-full object-contain dark:hidden"
                  src="/images/ThreadsBlack.svg"
                  alt=""
               />
            </div>
         </nuxt-link>
         <div
            class="group absolute right-0 top-0 grid aspect-square h-full cursor-pointer place-items-center sm:relative"
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
                  <rect
                     class="h-[2.5px] w-[14px]"
                     rx="1.25"
                     x="10"
                     y="15"
                  ></rect>
               </svg>
            </span>
         </div>
      </div>
   </div>
</template>
