<template>
  <div class="highest-width sm:py-8 bg-white">
    <div class="flex sm:hidden -mb-[4cm] justify-end z-40">
      <img class="" src="/images/Rectangle 4991.png" alt="">
    </div>
    <div class="rounded-2xl flex items-center bg-[#225AD6] mx-auto">
      <div class="px-8 py-10 sm:py-0 space-y-6 text-center sm:text-start mx-auto sm:w-1/2">
        <h2 class="text-white mb-4">
          <span class="text-white" v-html="ctaData?.headline || 'Stop firefighting. <br> Start delivering with confidence.'"></span>
        </h2>
        <NuxtLink v-for="button in ctaData?.buttons || [{ text: 'Book a Demo Now', link: '/Request_demo' }]" :key="button.text" :to="button.link || '/Request_demo'">
          <button class="solid-btn2">
            {{ button.text }}
          </button>
        </NuxtLink>
      </div>

      <div class="hidden sm:flex w-1/2">
        <img class="rounded-r-2xl" src="/images/Feature/Feature2/cta-delivery.jpg" alt="bike_delivery">
      </div>
    </div>
    <div class="flex sm:hidden -mt-[4cm] z-4">
      <img class="rotate-180" src="/images/Rectangle 4991.png" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { useApi } from '~/composables/useApi'

interface PageBlock {
  type: string
  data: any
}

interface PageData {
  blocks?: PageBlock[]
  [key: string]: any
}

const { getPageBySlug } = useApi()
const pageData = ref<PageData | null>(null)

const ctaData = computed(() => {
  if (pageData.value?.blocks) {
    return pageData.value.blocks.find(block => block.type === 'Delivery')?.data
  }
  return null
})

onMounted(async () => {
  try {
    pageData.value = await getPageBySlug('features')
  } catch (error) {
    console.error('Failed to fetch features page data:', error)
  }
})
</script>

<style>

</style>