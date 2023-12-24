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

<script>
export default {
   props: {
      size: Number
   },
   computed: {
      computedStyle() {
         return {
            width: this.size + 'px',
            height: this.size + 'px' // Assuming you want a square aspect ratio
         }
      }
   }
}
</script>
