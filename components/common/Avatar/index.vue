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

<script lang="ts">
export default {
   props: {
      size: Number
   },
   computed: {
      computedStyle() {
         return {
            width: this.size + 'px',
            height: this.size + 'px'
         }
      }
   }
}
</script>
