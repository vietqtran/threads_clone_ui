<template>
   <div class="hidden items-center justify-between border-b py-4 sm:flex">
      <div>
         <CommonAvatar :size="36" />
      </div>
      <div @click="open" class="mx-2 flex-1 cursor-text pl-1 text-gray-400">
         <span class="font-light">Start a thread...</span>
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

<script lang="ts" setup>
import { createThreadModalStore } from '~/store/modal.createThread'

const createThreadModal = createThreadModalStore()

const open = () => {
   createThreadModal.open()
}
</script>
