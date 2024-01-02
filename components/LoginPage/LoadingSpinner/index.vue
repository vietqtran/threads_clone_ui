<template>
   <div class="my-2 max-h-[54px] overflow-hidden rounded-lg">
      <div
         aria-label="Loading..."
         class="w-full grid place-items-center bg-[#181818] py-4 text-15 font-semibold text-white dark:bg-white dark:text-black"
         role="status"
      >
         <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 animate-spin stroke-white"
         >
            <path
               d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"
            ></path>
         </svg>
      </div>
   </div>
</template>

<script lang="ts" setup></script>
