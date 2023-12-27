<template>
   <div
      class="flex flex-col relative bg-white text-gray-900 dark:bg-black dark:text-white"
   >
      <Header />
      <NavigationBar />
      <slot />

      <PostImageModal />
   </div>
</template>

<script lang="ts">
import Header from '~/components/common/Header/index.vue'
import NavigationBar from '~/components/common/NavigationBar/index.vue'
import PostImageModal from '~/components/common/Modal/PostImageModal.vue'

export default {
   components: {
      Header,
      NavigationBar,
      PostImageModal
   }
}
</script>
