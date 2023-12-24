<template>
   <div class="py-3 border-b h-auto">
      <div class="flex h-full w-full">
         <div class="min-w-[48px] flex flex-col max-w-[48px]">
            <!-- Avatar  -->
            <div class="w-full flex justify-start pt-1">
               <AvatarWithFollowButton :size="36" />
            </div>

            <!-- Line  -->
            <div class="pt-[10px] pb-1 flex-1 pr-3 flex justify-center">
               <div
                  class="min-h-[100px] h-full w-[2px] bg-gray-200 dark:bg-gray-700"
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
                  <div class="cursor-pointer relative group">
                     <div
                        class="absolute group-hover:w-[36px] w-0 h-0 opacity-0 group-hover:opacity-100 duration-100 ease-out group-hover:h-[36px] bg-gray-100 rounded-full ab-center dark:bg-gray-800"
                     ></div>
                     <svg
                        aria-label="More"
                        role="img"
                        viewBox="0 0 24 24"
                        class="w-[20px] h-[20px] block relative fill-current text-black dark:text-white"
                        style="
                           --fill: currentColor;
                           --height: 20px;
                           --width: 20px;
                        "
                     >
                        <title>More</title>
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                     </svg>
                  </div>
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
                  class="w-full cursor-grab active:cursor-grabbing max-h-[430px] my-2"
               >
                  <Flicking :options="{ moveType: 'freeScroll', bound: true }">
                     <div class="pr-2 h-full">
                        <img
                           draggable="false"
                           class="max-h-[280px] rounded-lg select-none"
                           src="/images/user.jpg"
                           alt=""
                        />
                     </div>
                     <div class="pr-2">
                        <img
                           draggable="false"
                           class="max-h-[280px] rounded-lg select-none"
                           src="/images/user2.jpg"
                           alt=""
                        />
                     </div>
                     <div class="pr-2">
                        <img
                           draggable="false"
                           class="max-h-[280px] rounded-lg select-none"
                           src="/images/user.jpg"
                           alt=""
                        />
                     </div>
                     <div class="pr-2">
                        <img
                           draggable="false"
                           class="max-h-[280px] rounded-lg select-none"
                           src="/images/user2.jpg"
                           alt=""
                        />
                     </div>
                     <div class="pr-2">
                        <img
                           draggable="false"
                           class="max-h-[280px] rounded-lg select-none"
                           src="/images/user.jpg"
                           alt=""
                        />
                     </div>
                  </Flicking>
               </div>

               <!-- With > 2 images -->
               <!-- <div class="w-full grid grid-cols-2 my-2">
                  <div class="pr-2 h-full cursor-pointer">
                     <img
                        draggable="false"
                        class="h-full max-h-[350px] rounded-lg select-none object-cover"
                        src="/images/user.jpg"
                        alt=""
                     />
                  </div>
                  <div class="pr-2 h-full cursor-pointer">
                     <img
                        draggable="false"
                        class="h-full max-h-[350px] rounded-lg select-none object-cover"
                        src="/images/user2.jpg"
                        alt=""
                     />
                  </div>
               </div> -->

               <!-- With 1 Image  -->
               <!-- <div class="my-2 cursor-pointer">
                  <img
                     draggable="false"
                     class="rounded-lg max-h-[480px] select-none object-cover"
                     src="/images/user2.jpg"
                     alt=""
                  />
               </div> -->

               <!-- Action  -->
               <div class="flex items-center py-2 gap-4">
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
         <!-- <div class="w-[48px] h-[35px] pr-2 text-15 relative">
            <div
               class="ab-center-x border-2 border-white dark:border-black left-0 rounded-full"
            >
               <Avatar :size="16" />
            </div>
            <div
               class="ab-center-x border-2 border-white dark:border-black right-[15px] rounded-full"
            >
               <Avatar :size="16" />
            </div>
         </div> -->

         <!-- With 3 users  -->
         <div class="w-[48px] h-[35px] pr-2 text-15 relative">
            <div class="absolute w-fit right-3 top-0 rounded-full">
               <Avatar :size="20" />
            </div>
            <div class="absolute w-fit left-0 top-3 right-[15px] rounded-full">
               <Avatar :size="16" />
            </div>
            <div
               class="absolute w-fit right-[15px] bottom-0 left-4 rounded-full"
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

export default {
   components: {
      AvatarWithFollowButton,
      Avatar,
      Flicking,
      LikeIcon,
      ReplyIcon,
      RepostIcon,
      ShareIcon
   }
}
</script>

<style>
@import url('~/node_modules/@egjs/vue3-flicking/dist/flicking.css');
@import url('~/node_modules/@egjs/vue3-flicking/dist/flicking-inline.css');
</style>
