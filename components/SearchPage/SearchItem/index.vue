<template>
   <nuxt-link to="/">
      <div class="pt-4 text-15 flex items-start">
         <div class="pt-1 pr-3">
            <Avatar :size="36" />
         </div>
         <div
            class="flex-1 pb-3 border-b-[1px] border-b-black dark:border-b-white dark:border-opacity-25 border-opacity-20"
         >
            <div class="flex items-center justify-between pb-2">
               <div class="flex flex-col leading-5 flex-1">
                  <p class="max-w-[150px] truncate font-medium">vietqtran</p>
                  <P class="max-w-[150px] opacity-60 truncate"> vietqtran </P>
               </div>
               <div>
                  <button
                     class="py-[6px] border-[1px] leading-5 font-medium border-black dark:border-opacity-25 dark:border-white rounded-lg border-opacity-20 w-[102px] grid"
                     type="button"
                  >
                     Follow
                  </button>
               </div>
            </div>
            <div>100k followers</div>
         </div>
      </div>
   </nuxt-link>
</template>

<script lang="ts">
import Avatar from '~/components/common/Avatar/index.vue'

export default {
   components: {
      Avatar
   }
}
</script>
