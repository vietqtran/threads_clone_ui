<template>
   <button
      class="min-w-[98px] rounded-lg border-[1px] border-opacity-30 px-4 py-[6px] text-sm font-medium leading-5 outline-none"
      :class="{
         'bg-[#181818] dark:border-white dark:bg-white dark:text-black border-black text-white':
            active,
         'border-black dark:border-white dark:border-opacity-30': !active
      }"
   >
      <span class="block translate-y-[1px]">{{ tab }}</span>
   </button>
</template>

<script>
export default {
   props: {
      tab: String,
      active: Boolean
   }
}
</script>
