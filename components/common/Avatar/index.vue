<template>
   <div
      class="aspect-square rounded-full overflow-hidden"
      :style="computedStyle"
   >
      <img
         src="/images/user.jpg"
         class="w-full h-full object-cover"
         alt="Avatar"
      />
   </div>
</template>

<script lang="ts" setup>
const props = defineProps({
   size: {
      type: Number,
      required: true
   }
})

const computedStyle = computed(() => {
   return {
      width: props.size + 'px',
      height: props.size + 'px'
   }
})
</script>
