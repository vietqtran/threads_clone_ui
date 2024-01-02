<template>
   <div ref="element" class="relative select-none">
      <div @click="show = !show" class="cursor-pointer group">
         <div
            class="ab-center absolute h-0 w-0 rounded-full bg-black/5 opacity-0 duration-100 ease-out group-hover:h-[36px] group-hover:w-[36px] group-hover:opacity-100 group-active:scale-90 dark:bg-white/10"
         ></div>
         <svg
            aria-label="More"
            role="img"
            viewBox="0 0 24 24"
            class="relative block h-[20px] w-[20px] fill-current text-black group-active:scale-90 dark:text-white"
            style="--fill: currentColor; --height: 20px; --width: 20px"
         >
            <title>More</title>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
         </svg>
      </div>
      <!-- More  -->
      <div
         v-show="show"
         @click="(event) => event.preventDefault()"
         class="dropdown-shadow more-dropdown absolute right-[-6px] top-[30px] z-40 w-[190px] overflow-hidden rounded-2xl border-[.1px] border-black/10 bg-white duration-300 dark:border-white/10 dark:bg-[#181818]"
      >
         <ul class="w-full cursor-pointer">
            <li
               @click="console.log('Mute')"
               class="border-b px-4 py-[11px] font-medium"
            >
               Mute
            </li>
            <li
               @click="console.log('Block')"
               class="border-b px-4 py-[11px] font-medium text-red-500"
            >
               Block
            </li>
            <li
               @click="console.log('Hide')"
               class="border-b px-4 py-[11px] font-medium"
            >
               Hide
            </li>
            <li
               @click="console.log('Report')"
               class="px-4 py-[11px] font-medium text-red-500"
            >
               Report
            </li>
         </ul>
      </div>
   </div>
</template>

<script lang="ts" setup>
const element = ref<HTMLElement | null>(null)
const show = ref(false)

const handleClickOutside = () => {
   show.value = false
}

const isClickOutside = (event: MouseEvent) => {
   if (element.value && !element.value.contains(event.target as Node)) {
      handleClickOutside()
   }
}

onMounted(() => {
   window.addEventListener('click', isClickOutside)
})

onUnmounted(() => {
   window.removeEventListener('click', isClickOutside)
})
</script>
