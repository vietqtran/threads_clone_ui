<template>
   <div
      v-if="isOpened"
      @click="close"
      class="fixed bottom-0 left-0 right-0 top-0 z-[9999] grid h-full w-full place-items-center bg-black bg-opacity-70"
   >
      <div
         class="flex h-full w-full flex-col justify-center sm:max-w-[618px] sm:pb-10 sm:pt-2"
      >
         <div
            @click.stop
            class="relative w-full bg-white p-3 text-center text-black sm:border-b sm:border-none sm:bg-transparent sm:p-5 sm:text-white dark:bg-[#181818] dark:text-white dark:sm:bg-transparent"
         >
            <div
               @click="close"
               class="absolute left-0 h-full px-3 cursor-pointer w-fit sm:hidden"
            >
               Cancel
            </div>
            <h2 class="font-bold">New thread</h2>
         </div>

         <div
            @click.stop
            class="flex h-full flex-col overflow-hidden bg-white sm:h-fit sm:rounded-2xl dark:border-[1px] dark:border-white dark:border-opacity-10 dark:bg-[#181818]"
         >
            <div class="h-full overflow-y-auto p-6 pb-4 sm:max-h-[601px]">
               <div class="h-auto">
                  <div class="flex w-full h-full">
                     <div class="flex min-w-[48px] max-w-[48px] flex-col">
                        <!-- Avatar  -->
                        <div class="flex justify-start w-full pt-1">
                           <CommonAvatar :size="36" />
                        </div>

                        <div
                           class="flex flex-1 justify-center pb-1 pr-3 pt-[10px]"
                        >
                           <div
                              class="h-auto min-h-[32px] w-[2px] bg-black/20 dark:bg-white/30"
                           ></div>
                        </div>
                     </div>
                     <div class="w-full">
                        <!-- Username  -->
                        <div class="font-medium cursor-text">
                           <span class="leading-0">vietqtran</span>
                        </div>
                        <!-- Content Input  -->
                        <div class="w-full min-h-0">
                           <Textarea
                              @setContent="setContent"
                              :content="content"
                           />
                        </div>

                        <div class="flex items-center mt-1 -ml-2">
                           <Image />
                           <Poll />
                        </div>
                     </div>
                  </div>
                  <div
                     class="flex w-full items-center pt-[10px]"
                     :class="{
                        'opacity-100 cursor-pointer': content !== '',
                        'opacity-50 cursor-auto': content === ''
                     }"
                  >
                     <div class="w-[48px] pl-[10px]">
                        <CommonAvatar :size="16" />
                     </div>
                     <div class="opacity-50">
                        <span>Add to thread</span>
                     </div>
                  </div>
               </div>
            </div>

            <div
               class="flex items-center justify-between bg-white p-6 dark:bg-[#181818]"
            >
               <div class="opacity-50 cursor-pointer">Anyone can reply</div>
               <div>
                  <button
                     class="rounded-full bg-[#181818] px-4 py-[6px] font-semibold text-white dark:bg-white dark:text-black"
                     :class="{
                        'opacity-100 cursor-pointer': content !== '',
                        'opacity-25 cursor-not-allowed': content === ''
                     }"
                  >
                     Post
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts" setup>
import { createThreadModalStore } from '~/store/modal.createThread'
import Textarea from './Textarea.vue'
import Image from './Icons/Image.vue'
import Poll from './Icons/Poll.vue'

const createThreadModal = createThreadModalStore()
const isOpened = computed(() => createThreadModal.isOpened)

const close = () => {
   createThreadModal.close()
}

const content = ref('')

const setContent = (value: string) => {
   content.value = value
}
</script>
