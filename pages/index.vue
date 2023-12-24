<template>
   <NuxtLayout>
      <Head>
         <title>Threads</title>
      </Head>
      <div class="max-w-[620px] container mx-auto px-6">
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
