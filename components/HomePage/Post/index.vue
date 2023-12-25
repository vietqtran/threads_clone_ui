<template>
   <div class="h-auto border-b py-3">
      <div class="flex h-full w-full">
         <div class="flex min-w-[48px] max-w-[48px] flex-col">
            <!-- Avatar  -->
            <div class="flex w-full justify-start pt-1">
               <AvatarWithFollowButton :size="36" />
            </div>

            <!-- Line  -->
            <div class="flex flex-1 justify-center pb-1 pr-3 pt-[10px]">
               <div
                  class="h-full min-h-[100px] w-[2px] bg-gray-200 dark:bg-gray-700"
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
                     <span class="text-sm text-gray-500">35m</span>
                  </div>
                  <More />
               </div>
            </div>
            <div class="w-full">
               <!-- Content  -->
               <div>
                  <p class="text-15 leading-5">
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
               <!-- <div class="my-2 grid w-full grid-cols-2">
                  <div class="h-full cursor-pointer pr-2">
                     <img
                        draggable="false"
                        class="h-full max-h-[350px] select-none rounded-lg object-cover"
                        src="/images/user.jpg"
                        alt=""
                     />
                  </div>
                  <div class="h-full cursor-pointer pr-2">
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
               class="ab-center-x left-0 rounded-full border-2 border-white dark:border-black"
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
            <div class="absolute right-3 top-0 w-fit rounded-full">
               <Avatar :size="20" />
            </div>
            <div class="absolute left-0 right-[15px] top-3 w-fit rounded-full">
               <Avatar :size="16" />
            </div>
            <div
               class="absolute bottom-0 left-4 right-[15px] w-fit rounded-full"
            >
               <Avatar :size="12" />
            </div>
         </div>
         <div class="text-gray-400">
            <nuxt-link to="/">66 replies</nuxt-link>
            <span>&nbsp;·&nbsp;</span>
            <button class="hover:underline">View activity</button>
         </div>
      </div>
   </div>
</template>

<script>
import AvatarWithFollowButton from '~/components/common/Avatar/AvatarWithFollowButton.vue'
import Avatar from '~/components/common/Avatar'
import Flicking from '@egjs/vue3-flicking'
import LikeIcon from '~/components/common/ActionIcon/LikeIcon.vue'
import ReplyIcon from '~/components/common/ActionIcon/ReplyIcon.vue'
import RepostIcon from '~/components/common/ActionIcon/RepostIcon.vue'
import ShareIcon from '~/components/common/ActionIcon/ShareIcon.vue'
import More from './More.vue'

export default {
   components: {
      AvatarWithFollowButton,
      Avatar,
      Flicking,
      LikeIcon,
      ReplyIcon,
      RepostIcon,
      ShareIcon,
      More
   }
}
</script>

<style>
@import url('~/node_modules/@egjs/vue3-flicking/dist/flicking.css');
@import url('~/node_modules/@egjs/vue3-flicking/dist/flicking-inline.css');
</style>
