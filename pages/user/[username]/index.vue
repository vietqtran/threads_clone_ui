<template>
   <NuxtLayout>
      <Head>
         <title>{{ pageTitle }}</title>
      </Head>
      <div class="container mx-auto text-15 max-w-[620px] px-6">
         <div class="flex flex-col gap-6 py-4">
            <div class="flex items-center justify-between w-full">
               <div>
                  <div>
                     <h1 class="text-2xl font-bold tracking-wide">vietqtran</h1>
                     <h2 class="mt-1">Trần Quốc Việt</h2>
                  </div>
               </div>
               <div>
                  <CommonAvatar :size="84" />
               </div>
            </div>
            <div>Bio</div>
            <div class="opacity-50">
               <span>102 followers</span>
            </div>
         </div>
         <div class="grid grid-cols-2 gap-3 py-3 font-medium">
            <button
               class="active:scale-90 duration-100 ease-linear dark:border-[1px] dark:border-white/20 w-full py-[6px] bg-black text-white rounded-lg border-[1px] border-black"
            >
               Follow
            </button>
            <button
               class="active:scale-90 duration-100 ease-linear w-full py-[5px] bg-white text-black rounded-lg border-[1px] border-opacity-20 border-black"
            >
               Mention
            </button>
         </div>
         <div></div>
         <div></div>
      </div>
   </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute()
const pageTitle = ref(`Trần Quốc Việt (${route.params.username}) on Threads`)
</script>
