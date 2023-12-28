<template>
   <div
      v-if="isOpened"
      @click="close"
      class="w-full h-full grid place-items-center fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-[9999]"
   >
      <div
         class="sm:max-w-[618px] sm:pb-10 sm:pt-2 h-full w-full flex flex-col justify-center"
      >
         <div
            @click.stop
            class="w-full sm:p-5 p-3 relative text-center sm:bg-transparent sm:border-none sm:border-b bg-white sm:text-white text-black"
         >
            <div
               @click="close"
               class="sm:hidden cursor-pointer h-full w-fit px-3 absolute left-0"
            >
               Cancel
            </div>
            <h2 class="font-bold">New thread</h2>
         </div>

         <div
            @click.stop
            class="flex flex-col dark:border-[1px] dark:border-white dark:border-opacity-10 overflow-hidden sm:rounded-2xl bg-white dark:bg-[#181818] sm:h-fit h-full"
         >
            <div class="p-6 pb-4 overflow-y-auto sm:max-h-[601px] h-full">
               <div class="h-auto">
                  <div class="flex h-full w-full">
                     <div class="flex min-w-[48px] max-w-[48px] flex-col">
                        <!-- Avatar  -->
                        <div class="flex w-full justify-start pt-1">
                           <Avatar :size="36" />
                        </div>

                        <div
                           class="flex flex-1 justify-center pb-1 pr-3 pt-[10px]"
                        >
                           <div
                              class="h-auto min-h-[32px] w-[2px] bg-gray-200 dark:bg-opacity-40"
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

                        <div class="mt-1 -ml-2 flex items-center">
                           <Image />
                           <Poll />
                        </div>
                     </div>
                  </div>
                  <div
                     class="w-full pt-[10px] flex items-center"
                     :class="{
                        'opacity-100 cursor-pointer': content !== '',
                        'opacity-50 cursor-auto': content === ''
                     }"
                  >
                     <div class="pl-[10px] w-[48px]">
                        <Avatar :size="16" />
                     </div>
                     <div class="opacity-50">
                        <span>Add to thread</span>
                     </div>
                  </div>
               </div>
            </div>

            <div
               class="p-6 bg-white dark:bg-[#181818] flex items-center justify-between"
            >
               <div class="cursor-pointer opacity-50">Anyone can reply</div>
               <div>
                  <button
                     class="px-4 font-semibold py-[6px] rounded-full dark:bg-white bg-black dark:text-black text-white"
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

<script lang="ts">
import { createThreadModalStore } from '~/store/modal.createThread'
import Avatar from '../Avatar/index.vue'
import Textarea from './Textarea.vue'
import Image from './Icons/Image.vue'
import Poll from './Icons/Poll.vue'

export default {
   components: { Avatar, Textarea, Image, Poll },
   setup() {
      const createThreadModal = createThreadModalStore()
      const isOpened = computed(() => createThreadModal.isOpened)

      const close = () => {
         createThreadModal.close()
      }

      return {
         isOpened,
         close
      }
   },
   data() {
      return {
         content: ''
      }
   },
   methods: {
      setContent(value: string) {
         this.$data.content = value
      }
   }
}
</script>
