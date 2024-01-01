<template>
   <NuxtLayout>
      <NuxtLoadingIndicator />
      <Head>
         <title>Threads</title>
      </Head>
      <keep-alive>
         <div class="container mx-auto max-w-[620px] px-3 sm:px-6">
            <HomePageCreatePost />

            <HomePagePost postId="1" />
            <HomePagePost postId="2" />
            <HomePagePost postId="3" />
            <HomePagePost postId="4" />
            <HomePagePost postId="5" />
            <HomePagePost postId="6" />
            <HomePagePost postId="7" />
         </div>
      </keep-alive>
   </NuxtLayout>
</template>

<script lang="ts" setup></script>
