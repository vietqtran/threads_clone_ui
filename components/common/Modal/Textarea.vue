<template>
   <textarea
      class="w-full font-normal placeholder:font-light outline-none resize-none block dark:bg-inherit"
      placeholder="Start a thread..."
      ref="autoTextAreaRef"
      autofocus
      :rows="rows"
      :value="props.content"
      @input="changeInput"
      @keydown.enter="resizeTextarea"
   ></textarea>
</template>

<script lang="ts" setup>
const props = defineProps({
   content: {
      type: String,
      require: true
   }
})

const autoTextAreaRef = ref<HTMLTextAreaElement | null>(null)
const resizeTextarea = () => {
   const textarea = autoTextAreaRef.value
   if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
   }
}

const emits = defineEmits()
const changeInput = (event: Event) => {
   const input = event.target as HTMLInputElement
   if (input) {
      emits('setContent', input.value)
   }
   resizeTextarea()
}

const rows = ref(1)

onMounted(() => {
   resizeTextarea()
})
</script>
