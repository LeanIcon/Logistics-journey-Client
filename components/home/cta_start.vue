<template>
    <div class="highest-width sm:py-8 bg-white">
        <div class="flex sm:hidden -mb-[4cm] justify-end z-40">
            <img class="" src="/public/images/Rectangle 4991.png" alt="">
        </div>
        <div class="rounded-2xl flex items-center bg-[#225AD6] mx-auto">
            <div class="px-8 py-10 sm:py-0 text-center sm:text-start mx-auto sm:w-1/2">
                <h2 v-html= "heroData?.headline || fallbackDescription"  class="text-[24px] xss:text-[32px] lg:text-[43px] leading-[47px] font-normal -mt-1 text-white max-w-md mb-6">                   
                </h2>
                <NuxtLink to="/Request_demo">
                    <button class="solid-btn2">
                        {{ heroData?.button.text || 'Book a Demo Now' }}
                    </button>
                </NuxtLink>
            </div>

            <div class="hidden sm:flex w-1/2">
                <img class="rounded-r-2xl" :src=" heroData?.image || '/images/About/cta-about_us.png'" alt="">
            </div>
        </div>
         <div class="flex sm:hidden -mt-[4cm] z-4">
            <img class="rotate-180" src="/public/images/Rectangle 4991.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApi } from '~/composables/useApi'
import { motion } from "motion-v"
import { ref, onMounted } from 'vue'

const { getPagesBySlug } = useApi()

const heroData = ref<any>(null)

onMounted(async () => {
  try {
    const response = await getPagesBySlug('home')
    const blocks = response?.data?.blocks || []
    const heroBlock = blocks.find((b: any) => b.type === 'CTAHomepage')

    if (heroBlock && heroBlock.data) {
      heroData.value = heroBlock.data
    }
  } catch (error) {
    console.error('Failed to load hero section:', error)
  }
})

const fallbackDescription = `
  Stop firefighting. 
  <br> 
  Start delivering with confidence.
`;
</script>

<style>

</style>