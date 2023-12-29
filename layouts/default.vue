<template>
   <div
      class="flex flex-col relative bg-white text-gray-900 dark:bg-black dark:text-white"
   >
      <Header />
      <NavigationBar />

      <keep-alive>
         <slot />
      </keep-alive>

      <!-- Modals -->
      <PostImageModal />
      <CreateThreadModal />
   </div>
</template>

<script lang="ts">
import Header from '~/components/common/Header/index.vue'
import NavigationBar from '~/components/common/Header/NavigationBar/index.vue'
import PostImageModal from '~/components/common/Modal/PostImageModal.vue'
import CreateThreadModal from '~/components/common/Modal/CreateThreadModal.vue'

export default {
   components: {
      Header,
      NavigationBar,
      PostImageModal,
      CreateThreadModal
   }
}
</script>
