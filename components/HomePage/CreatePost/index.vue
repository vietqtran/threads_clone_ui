<template>
   <div class="hidden items-center justify-between border-b py-4 sm:flex">
      <div>
         <Avatar :size="36" />
      </div>
      <div class="mx-2 flex-1 cursor-text pl-1 text-gray-400">
         <span>Start a thread...</span>
      </div>
      <div>
         <button
            class="cursor-not-allowed rounded-full bg-gray-400 bg-opacity-60 px-4 py-2 font-bold text-gray-50 dark:text-gray-800"
         >
            Post
         </button>
      </div>
   </div>
</template>

<script lang="ts">
import Avatar from '~/components/common/Avatar/index.vue'

export default {
   components: {
      Avatar
   }
}
</script>
