<template>
   <NuxtLayout>
      <NuxtLoadingIndicator />
      <Head>
         <title>Search • Threads</title>
      </Head>
      <SearchPage />
   </NuxtLayout>
</template>

<script lang="ts">
import SearchPage from '~/components/SearchPage/index.vue'

export default {
   components: { SearchPage }
}
</script>
