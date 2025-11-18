<template>
    <div class="highest-width sm:py-8 bg-white mb-24">
        <div class="flex sm:hidden -mb-[4cm] justify-end z-40">
            <img class="" src="/public/images/Rectangle 4991.png" alt="">
        </div>
        <div class="rounded-2xl flex items-center bg-[#225AD6] mx-auto">
            <div class="px-8 py-10 sm:py-0 space-y-6 text-center sm:text-start mx-auto sm:w-1/2">
                <h2 class="text-white mb-4">
                    {{ data?.headline || 'Stop firefighting. Start delivering with confidence.' }}
                </h2>
                <NuxtLink :to="data?.button?.url || '/Request_demo'">
                    <button class="solid-btn2">
                        {{ data?.button?.text || 'Book a Demo Now' }}
                    </button>
                </NuxtLink>
            </div>

            <div class="hidden sm:flex w-1/2">
                <img v-if="data?.image?.path" class="rounded-r-xl w-full h-full object-cover" :src="data.image.path" :alt="data.image.alt || 'About CTA'">
                <img v-else class="rounded-r-xl w-full h-full object-cover" src="/images/About/Image.png" alt="About CTA">
            </div>
        </div>
         <div class="flex sm:hidden -mt-[4cm] z-4">
            <img class="rotate-180" src="/public/images/Rectangle 4991.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
  data?: {
    headline: string
    description: string | null
    button: {
      text: string
      url: string
      style: string
    }
    background_color: string
    image?: {
      path: string
      url: string
      alt: string
    }
  }
}>()
</script>

<style>

</style>