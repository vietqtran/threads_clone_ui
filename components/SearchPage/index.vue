<template>
   <div class="container py-2 mx-auto max-w-[620px] px-6">
      <div class="w-full relative">
         <Input :value="searchContent" @setValue="setValue" />
      </div>

      <div class="pt-[72px]">
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
      </div>
   </div>
</template>

<script lang="ts">
import Input from './Input/index.vue'
import SearchItem from './SearchItem/index.vue'

export default {
   components: { Input, SearchItem },
   data() {
      return {
         searchContent: ''
      }
   },
   methods: {
      setValue(value: string) {
         this.$data.searchContent = value
      }
   }
}
</script>
