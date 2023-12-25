<template>
   <div class="my-[2px] w-full rounded-lg py-1">
      <input
         autocomplete="true"
         :value="value"
         @input="onInput"
         class="d-login w-full rounded-lg bg-login-input-l p-4 text-15 outline-none outline-offset-0 focus:outline focus:outline-[1px] focus:outline-gray-300 dark:bg-login-input-d dark:focus:outline-gray-600"
         :type="type"
         :placeholder="placeholder"
      />
   </div>
</template>

<script lang="ts">
export default {
   props: {
      value: String,
      type: String,
      placeholder: String
   },
   methods: {
      onInput(event: Event) {
         const input = (event.target as HTMLInputElement) || null
         if (input) {
            this.$emit('updateValue', input.value)
         }
      }
   }
}
</script>
