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

<script>
import CreatePost from '~/components/HomePage/CreatePost'
import Post from '~/components/HomePage/Post'

export default {
   components: {
      CreatePost,
      Post
   }
}
</script>
