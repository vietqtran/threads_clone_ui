<template>
   <div class="items-center justify-between hidden py-4 border-b sm:flex">
      <div>
         <CommonAvatar :size="36" />
      </div>
      <div
         @click="open"
         class="flex-1 pl-1 mx-2 dark:text-white/30 text-black/40 cursor-text"
      >
         <span>Start a thread...</span>
      </div>
      <div>
         <button
            class="px-4 py-2 font-bold text-white rounded-full cursor-not-allowed bg-black/20 bg-opacity-60 dark:bg-white/40 dark:text-black"
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
