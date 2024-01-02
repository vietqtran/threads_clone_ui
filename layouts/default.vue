<template>
   <div
      class="relative flex min-h-[100vh] flex-col bg-white text-black dark:bg-[#101010] dark:text-white"
   >
      <CommonHeader />
      <CommonHeaderNavigationBar />

      <keep-alive>
         <slot />
      </keep-alive>

      <!-- Modals -->
      <PostImageModal />
      <CreateThreadModal />
   </div>
</template>

<script lang="ts" setup>
import CreateThreadModal from '~/components/common/Modal/CreateThreadModal.vue'
import PostImageModal from '~/components/common/Modal/PostImageModal.vue'
</script>
