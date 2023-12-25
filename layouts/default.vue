<template>
   <div
      class="flex flex-col bg-white text-gray-900 dark:bg-black dark:text-white"
   >
      <Header />
      <NavigationBar />
      <slot />
   </div>
</template>

<script lang="ts">
import Header from '~/components/common/Header/index.vue'
import NavigationBar from '~/components/common/NavigationBar/index.vue'

export default {
   components: {
      Header,
      NavigationBar
   }
}
</script>
