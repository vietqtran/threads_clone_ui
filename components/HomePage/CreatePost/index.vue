<template>
   <div class="py-4 border-b items-center justify-between sm:flex hidden">
      <div>
         <Avatar :size="36" />
      </div>
      <div class="flex-1 cursor-text mx-2 pl-1 text-gray-400">
         <span>Start a thread...</span>
      </div>
      <div>
         <button
            class="cursor-not-allowed text-gray-50 dark:text-gray-800 font-bold px-4 py-2 rounded-full bg-gray-400 bg-opacity-60"
         >
            Post
         </button>
      </div>
   </div>
</template>

<script>
import Avatar from '~/components/common/Avatar'

export default {
   components: {
      Avatar
   }
}
</script>
