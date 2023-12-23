<template>
   <div
      class="flex max-h-[100vh] flex-col text-black dark:bg-black dark:text-white"
   >
      <Head>
         <title>Threads</title>
      </Head>
      <slot class="flex-1" />
      <Footer />
   </div>
</template>

<script>
import Footer from '~/components/common/Footer'

export default {
   components: {
      Footer
   }
}
</script>
