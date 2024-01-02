<template>
   <div
      class="sticky left-0 right-0 top-0 z-30 flex w-full items-center bg-white dark:bg-[#101010]"
   >
      <div
         class="container mx-auto flex h-[60px] max-w-[1230px] items-center justify-center bg-transparent sm:h-[74px] sm:justify-between"
      >
         <Logo />
         <More />
      </div>
   </div>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue'
import More from './More.vue'
</script>
