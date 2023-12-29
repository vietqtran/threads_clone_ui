<template>
   <div
      class="sticky z-30 left-0 right-0 top-0 flex w-full items-center bg-white dark:bg-[#181818]"
   >
      <div
         class="container mx-auto flex h-[60px] max-w-[1230px] items-center justify-center bg-transparent sm:h-[74px] sm:justify-between"
      >
         <Logo />
         <More />
      </div>
   </div>
</template>

<script lang="ts">
import More from './More.vue'
import Logo from './Logo.vue'

export default {
   components: {
      More,
      Logo
   }
}
</script>
