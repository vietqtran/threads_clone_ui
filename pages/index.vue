<template>
   <NuxtLayout>
      <NuxtLoadingIndicator />
      <Head>
         <title>Threads</title>
      </Head>
      <div class="container mx-auto max-w-[620px] px-3 sm:px-6">
         <CreatePost />

         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </div>
   </NuxtLayout>
</template>

<script lang="ts">
import CreatePost from '~/components/HomePage/CreatePost/index.vue'
import Post from '~/components/HomePage/Post/index.vue'

export default {
   components: {
      CreatePost,
      Post
   }
}
</script>
