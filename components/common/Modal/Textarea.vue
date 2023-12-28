<template>
   <textarea
      class="w-full outline-none resize-none block"
      placeholder="Start a thread..."
      ref="autoTextArea"
      :rows="rows"
      :value="content"
      @input="changeInput"
      @keydown.enter="resizeTextarea"
   ></textarea>
</template>

<script lang="ts">
export default {
   props: {
      content: String
   },
   data() {
      return {
         rows: 1
      }
   },
   methods: {
      resizeTextarea() {
         const textarea: HTMLInputElement = this.$refs
            .autoTextArea as HTMLInputElement
         textarea.style.height = 'auto'
         textarea.style.height = textarea.scrollHeight + 'px'
      },
      changeInput(event: Event) {
         const input = (event.target as HTMLInputElement) || null
         if (input) {
            this.$emit('setContent', input.value)
         }
         this.resizeTextarea()
      }
   },
   mounted() {
      this.resizeTextarea()
   }
}
</script>
