<template>
   <div class="container py-2 mx-auto max-w-[620px] px-6">
      <div class="w-full relative">
         <SearchPageInput :value="searchContent" @setValue="setValue" />
      </div>

      <div class="pt-[72px]">
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
         <SearchPageSearchItem />
      </div>
   </div>
</template>

<script lang="ts" setup>
const searchContent = ref('')

const setValue = (value: string) => {
   searchContent.value = value
}
</script>
