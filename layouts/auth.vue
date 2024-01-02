<template>
   <div
      class="flex relative h-[100vh] flex-col text-black dark:bg-[#181818] dark:text-white"
   >
      <div
         class="absolute top-0 z-0 hidden w-full bg-top bg-no-repeat bg-contain h-1/2 bg-login sm:block"
      ></div>
      <Head>
         <title>Threads</title>
      </Head>
      <slot class="flex-1" />
      <CommonFooter />
   </div>
</template>
