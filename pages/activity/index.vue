<template>
   <NuxtLayout>
      <NuxtLoadingIndicator />
      <Head>
         <title>Activity • Threads</title>
      </Head>

      <div class="mx-auto mt-1 w-full pb-2">
         <div class="grid w-full place-items-center overflow-x-auto pb-2">
            <div class="flex items-center gap-2">
               <TypeButton
                  @click="currentTab = 'All'"
                  :active="currentTab === 'All'"
                  tab="All"
               />
               <TypeButton
                  @click="currentTab = 'Follows'"
                  :active="currentTab === 'Follows'"
                  tab="Follows"
               />
               <TypeButton
                  @click="currentTab = 'Replies'"
                  :active="currentTab === 'Replies'"
                  tab="Replies"
               />
               <TypeButton
                  @click="currentTab = 'Mentions'"
                  :active="currentTab === 'Mentions'"
                  tab="Mentions"
               />
               <TypeButton
                  @click="currentTab = 'Quotes'"
                  :active="currentTab === 'Quotes'"
                  tab="Quotes"
               />
               <TypeButton
                  @click="currentTab = 'Reposts'"
                  :active="currentTab === 'Reposts'"
                  tab="Reposts"
               />
            </div>
         </div>
      </div>
      <div class="container mx-auto max-w-[620px] px-6">
         <component :is="currentTab" />
      </div>
   </NuxtLayout>
</template>

<script>
import TypeButton from '~/components/ActivityPage/TypeButton.vue'
import All from '~/components/ActivityPage/Tabs/All.vue'
import Follows from '~/components/ActivityPage/Tabs/Follows.vue'
import Replies from '~/components/ActivityPage/Tabs/Replies.vue'
import Mentions from '~/components/ActivityPage/Tabs/Mentions.vue'
import Quotes from '~/components/ActivityPage/Tabs/Quotes.vue'
import Reposts from '~/components/ActivityPage/Tabs/Reposts.vue'

export default {
   components: {
      TypeButton,
      All,
      Follows,
      Replies,
      Mentions,
      Quotes,
      Reposts
   },
   data() {
      return {
         currentTab: 'All'
      }
   }
}
</script>
