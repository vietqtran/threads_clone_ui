<template>
   <div class="my-2 overflow-hidden rounded-lg">
      <button
         class="w-full bg-[#181818] py-4 text-15 font-semibold text-white dark:bg-white dark:text-black"
         :class="{
            'cursor-not-allowed text-gray-400 dark:text-gray-500':
               !props.clickable
         }"
         :type="props.clickable ? 'submit' : 'button'"
      >
         {{ props.title }}
      </button>
   </div>
</template>

<script lang="ts" setup>
const props = defineProps({
   title: {
      type: String,
      required: true
   },
   clickable: {
      type: Boolean,
      required: true
   }
})
</script>
