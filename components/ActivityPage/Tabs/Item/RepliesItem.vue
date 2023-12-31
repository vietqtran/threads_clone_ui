<template>
   <div class="flex items-start pt-4">
      <div class="min-w-[48px] relative">
         <Avatar :size="36" />

         <div
            class="bg-cyan-500 top-[20px] border-2 border-white right-[8px] rounded-full absolute w-[20px] h-[20px]"
         >
            <div class="w-full h-full grid place-items-center">
               <svg
                  aria-label=""
                  role="img"
                  viewBox="0 0 18 18"
                  class="w-[16px] h-[16px] block relative fill-white"
                  style="--fill: currentColor; --height: 18px; --width: 18px"
               >
                  <title></title>
                  <path
                     d="M8.62523 12.5C8.5337 12.5 8.44836 12.4796 8.3692 12.4389C8.29004 12.4008 8.20594 12.3384 8.11688 12.2519L5.18924 9.4084C5.1175 9.33969 5.06803 9.26972 5.04082 9.19847C5.01361 9.12723 5 9.06107 5 9C5 8.93639 5.01361 8.86896 5.04082 8.79771C5.06803 8.72646 5.1175 8.65649 5.18924 8.58779L8.11688 5.77099C8.21583 5.6743 8.30117 5.6056 8.37291 5.56489C8.44465 5.52163 8.52628 5.5 8.61781 5.5C8.74892 5.5 8.85529 5.5458 8.93692 5.6374C9.01855 5.72901 9.05937 5.83842 9.05937 5.96565V7.4084H9.16698C9.83488 7.4084 10.41 7.51399 10.8924 7.72519C11.3772 7.93639 11.7743 8.24173 12.0835 8.64122C12.3952 9.04071 12.6252 9.5229 12.7737 10.0878C12.9246 10.6501 13 11.2837 13 11.9885C13 12.1539 12.9604 12.2799 12.8813 12.3664C12.8046 12.4555 12.7168 12.5 12.6178 12.5C12.5387 12.5 12.4583 12.4835 12.3766 12.4504C12.2975 12.4173 12.2257 12.3397 12.1614 12.2176C11.9462 11.8003 11.6976 11.4746 11.4156 11.2405C11.1336 11.0038 10.8083 10.8372 10.4397 10.7405C10.0711 10.6438 9.64688 10.5954 9.16698 10.5954H9.05937V12.0534C9.05937 12.1832 9.01855 12.2901 8.93692 12.374C8.85529 12.458 8.75139 12.5 8.62523 12.5Z"
                  ></path>
               </svg>
            </div>
         </div>
      </div>
      <div
         class="text-15 pb-3 border-b-black border-opacity-15 border-b-[1px] flex-1 w-full"
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
               <span>Replied to your photo</span>
            </div>
            <div>Content</div>
         </div>
      </div>
   </div>
</template>

<script>
import Avatar from '~/components/common/Avatar/index.vue'

export default {
   components: {
      Avatar
   }
}
</script>
