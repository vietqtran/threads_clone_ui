<template>
   <div class="my-[2px] w-full rounded-lg py-1">
      <input
         autocomplete="true"
         :value="props.value"
         @input="onInput"
         class="d-login w-full rounded-lg bg-login-input-l p-4 text-15 outline-none outline-offset-0 focus:outline focus:outline-[1px] focus:outline-black/30 dark:bg-login-input-d dark:focus:outline-white/30"
         :type="props.type"
         :placeholder="props.placeholder"
      />
   </div>
</template>

<script lang="ts" setup>
const props = defineProps({
   value: {
      type: String,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   placeholder: {
      type: String,
      required: true
   }
})

const emits = defineEmits()
const onInput = (event: Event) => {
   const input = (event.target as HTMLInputElement) || null
   if (input) {
      emits('updateValue', input.value)
   }
}
</script>
