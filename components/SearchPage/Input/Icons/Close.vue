<template>
   <div
      class="p-2 opacity-20 cursor-pointer"
      :class="{ hidden: props.value === '', block: props.value !== '' }"
   >
      <svg
         aria-label="Clear"
         role="img"
         viewBox="0 0 24 24"
         class="w-[16px] h-[16px] fill-black dark:fill-white relative block"
         style="--fill: currentColor; --height: 16px; --width: 16px"
      >
         <title>Clear</title>
         <path
            d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm5.139 16.056a.766.766 0 1 1-1.083 1.083L12 13.083 7.944 17.14a.766.766 0 0 1-1.083-1.083L10.917 12 6.86 7.944a.766.766 0 0 1 1.083-1.083L12 10.917l4.056-4.056a.766.766 0 0 1 1.083 1.083L13.083 12Z"
         ></path>
      </svg>
   </div>
</template>

<script lang="ts" setup>
const props = defineProps({
   value: {
      type: String,
      required: true
   }
})
</script>
