<template>
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
</template>
