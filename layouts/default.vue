<template>
   <div
      class="flex flex-col bg-white text-gray-900 dark:bg-black dark:text-white"
   >
      <Header />
      <NavigationBar />
      <slot />
   </div>
</template>

<script>
import Header from '~/components/common/Header'
import NavigationBar from '~/components/common/NavigationBar'

export default {
   components: {
      Header,
      NavigationBar
   }
}
</script>
