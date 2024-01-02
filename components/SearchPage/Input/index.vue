<template>
   <div
      @click="isFocus = true"
      class="absolute left-0 right-0 top-0 flex w-full items-center rounded-2xl border-[1px] border-black/20 bg-[#fafafa] p-2 duration-100 ease-linear sm:px-4 sm:py-3 dark:border-white/30 dark:bg-[#181818]"
      :class="{ 'shadow-dark dark:shadow-light': isFocus }"
   >
      <Search />
      <div class="w-full flex-1 pb-[2px] pt-[1px]">
         <input
            ref="inputRef"
            @blur="isFocus = false"
            @input="onInput"
            :value="props.value"
            type="text"
            placeholder="Search"
            class="w-full bg-transparent font-normal outline-none placeholder:font-light sm:h-[34px]"
         />
      </div>
      <Close @click="clearInput" :value="props.value" />
   </div>
</template>

<script lang="ts" setup>
import Close from './Icons/Close.vue'
import Search from './Icons/Search.vue'

const props = defineProps({
   value: {
      type: String,
      required: true,
      default: ''
   }
})

const isFocus = ref(false)

const emits = defineEmits()

const onInput = (event: Event) => {
   const input = (event.target as HTMLInputElement) || null
   if (input) {
      emits('setValue', input.value)
   }
}
const clearInput = () => {
   emits('setValue', '')
}

const inputRef = ref<HTMLElement | null>(null)
watch(isFocus, (newValue) => {
   if (newValue) {
      const inputElement = inputRef.value
      if (inputElement) {
         inputElement.focus()
      }
   }
})
</script>

<style scoped>
.shadow-dark {
   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.shadow-light {
   box-shadow: rgba(255, 255, 255, 1) 0px 10px 15px -3px,
      rgba(255, 255, 255, 1) 0px 4px 6px -2px;
}
</style>
