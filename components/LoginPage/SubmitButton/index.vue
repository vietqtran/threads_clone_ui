<template>
   <div class="my-2 overflow-hidden rounded-lg">
      <button
         class="w-full bg-[#181818] py-4 text-15 font-semibold text-white dark:bg-white dark:text-black"
         :class="{
            'cursor-not-allowed text-gray-400 dark:text-gray-500': !clickable
         }"
         :type="clickable ? 'submit' : 'button'"
      >
         {{ title }}
      </button>
   </div>
</template>

<script lang="ts">
export default {
   props: {
      title: String,
      clickable: Boolean
   }
}
</script>
