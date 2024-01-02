<template>
   <div class="h-auto py-3 border-b">
      <div class="flex w-full h-full">
         <div class="flex min-w-[48px] max-w-[48px] flex-col">
            <!-- Avatar  -->
            <div class="flex justify-start w-full pt-1">
               <CommonAvatarWithFollowButton :size="36" />
            </div>

            <!-- Line  -->
            <div class="flex flex-1 justify-center pb-1 pr-3 pt-[10px]">
               <div
                  class="h-full min-h-[100px] w-[2px] bg-black/10 dark:bg-white/20"
               ></div>
            </div>
         </div>
         <div class="w-full">
            <div class="flex items-center justify-between">
               <!-- Username  -->
               <div>
                  <nuxt-link to="/" class="font-medium hover:underline">
                     <span>vietqtran</span>
                  </nuxt-link>
               </div>

               <!-- Time & More  -->
               <div class="flex items-center gap-4">
                  <div>
                     <span class="text-sm text-black/50 dark:text-white/40"
                        >35m</span
                     >
                  </div>
                  <More />
               </div>
            </div>
            <div class="w-full">
               <!-- Content  -->
               <div>
                  <p class="leading-5 text-15">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged.
                  </p>
               </div>

               <!-- Images  -->

               <!-- With > 3 images -->
               <div
                  class="my-2 max-h-[430px] w-full cursor-grab active:cursor-grabbing"
               >
                  <Flicking :options="{ moveType: 'freeScroll', bound: true }">
                     <div
                        key="1"
                        @click="openModal(0)"
                        class="h-full pr-2 duration-100 ease-in active:scale-95"
                     >
                        <img
                           draggable="false"
                           class="max-h-[280px] select-none rounded-lg"
                           src="/images/user.jpg"
                           alt=""
                        />
                     </div>
                     <div
                        key="2"
                        @click="openModal(1)"
                        class="h-full pr-2 duration-100 ease-in active:scale-95"
                     >
                        <img
                           draggable="false"
                           class="max-h-[280px] select-none rounded-lg"
                           src="/images/user2.jpg"
                           alt=""
                        />
                     </div>
                     <div
                        key="3"
                        @click="openModal(2)"
                        class="h-full pr-2 duration-100 ease-in active:scale-95"
                     >
                        <img
                           draggable="false"
                           class="max-h-[280px] select-none rounded-lg"
                           src="/images/user.jpg"
                           alt=""
                        />
                     </div>
                     <div
                        key="4"
                        @click="openModal(3)"
                        class="h-full pr-2 duration-100 ease-in active:scale-95"
                     >
                        <img
                           draggable="false"
                           class="max-h-[280px] select-none rounded-lg"
                           src="/images/user2.jpg"
                           alt=""
                        />
                     </div>
                     <div
                        key="5"
                        @click="openModal(4)"
                        class="h-full pr-2 duration-100 ease-in active:scale-95"
                     >
                        <img
                           draggable="false"
                           class="max-h-[280px] select-none rounded-lg"
                           src="/images/user.jpg"
                           alt=""
                        />
                     </div>
                  </Flicking>
               </div>

               <!-- With > 2 images -->
               <!-- <div class="grid w-full grid-cols-2 my-2">
                  <div class="h-full pr-2 cursor-pointer">
                     <img
                        draggable="false"
                        class="h-full max-h-[350px] select-none rounded-lg object-cover"
                        src="/images/user.jpg"
                        alt=""
                     />
                  </div>
                  <div class="h-full pr-2 cursor-pointer">
                     <img
                        draggable="false"
                        class="h-full max-h-[350px] select-none rounded-lg object-cover"
                        src="/images/user2.jpg"
                        alt=""
                     />
                  </div>
               </div> -->

               <!-- With 1 Image  -->
               <!-- <div class="my-2 cursor-pointer">
                  <img
                     draggable="false"
                     class="max-h-[480px] select-none rounded-lg object-cover"
                     src="/images/user2.jpg"
                     alt=""
                  />
               </div> -->

               <!-- Action  -->
               <div class="flex items-center gap-4 py-2">
                  <LikeIcon />
                  <ReplyIcon />
                  <RepostIcon />
                  <ShareIcon />
               </div>
            </div>
         </div>
      </div>

      <!-- Footer  -->
      <div class="flex items-center">
         <!-- With 2 users  -->
         <!-- <div class="relative h-[35px] w-[48px] pr-2 text-15">
            <div
               class="left-0 border-2 border-white rounded-full ab-center-x dark:border-black"
            >
               <Avatar :size="16" />
            </div>
            <div
               class="ab-center-x right-[15px] rounded-full border-2 border-white dark:border-black"
            >
               <Avatar :size="16" />
            </div>
         </div> -->

         <!-- With 3 users  -->
         <div class="relative h-[35px] w-[48px] pr-2 text-15">
            <div class="absolute top-0 rounded-full right-3 w-fit">
               <CommonAvatar :size="20" />
            </div>
            <div class="absolute left-0 right-[15px] top-3 w-fit rounded-full">
               <CommonAvatar :size="16" />
            </div>
            <div
               class="absolute bottom-0 left-4 right-[15px] w-fit rounded-full"
            >
               <CommonAvatar :size="12" />
            </div>
         </div>
         <div class="text-black/50 dark:text-white/50">
            <nuxt-link to="/">66 replies</nuxt-link>
            <span>&nbsp;·&nbsp;</span>
            <button class="hover:underline">View activity</button>
         </div>
      </div>
   </div>
</template>

<script lang="ts" setup>
import Flicking from '@egjs/vue3-flicking'
import { postImagesModalStore } from '~/store/modal.postImage'
import More from './More.vue'
import LikeIcon from './ActionIcon/LikeIcon.vue'
import ReplyIcon from './ActionIcon/ReplyIcon.vue'
import RepostIcon from './ActionIcon/RepostIcon.vue'
import ShareIcon from './ActionIcon/ShareIcon.vue'

const props = defineProps({
   postId: {
      type: String,
      required: true
   }
})

const postImagesModal = postImagesModalStore()

const openModal = (index: number) => {
   postImagesModal.open(
      [
         '/images/user.jpg',
         '/images/user2.jpg',
         '/images/user.jpg',
         '/images/user2.jpg',
         '/images/user.jpg'
      ],
      props.postId ?? '',
      index
   )
}
</script>

<style>
@import url('~/node_modules/@egjs/vue3-flicking/dist/flicking.css');
@import url('~/node_modules/@egjs/vue3-flicking/dist/flicking-inline.css');
</style>
