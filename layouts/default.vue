<template>
   <div
      class="relative flex min-h-[100vh] flex-col bg-white text-black dark:bg-[#181818] dark:text-white"
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
