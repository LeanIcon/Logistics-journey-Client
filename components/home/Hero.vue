<template>
  <div class="the-width bg-white mx-auto">
    <div class="flex flex-col mx-auto bg-[#E9EFFD] md:bg-white pt-12 md:pb-24 xl:pb-32">
      <div class="flex flex-col md:flex-row w-full md:gap-5 justify-between items-center">
        <motion.div
          class="w-full md:w-1/2 pl-4 sm:pl-6 lg:pl-16 pr-4 sm:pr-6 lg:pr-16"
          :initial="{ x: -100, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
          :transition="{ duration: 0.8 }"
        >
          <!-- Dynamic headline and fallback -->
          <h1 class="mb-8">
            {{ heroData?.headline || 'Making Every Journey' }}
            <span
              class="border-l-2 border-l-[#225AD6] bg-gradient-to-r from-[#225bd66d] via-[#225bd630] to-[#225bd600] text-[#225AD6]"
              style="font-weight: 800;"
            >
              {{ heroData?.highlight_text || 'Count' }}
            </span>
          </h1>

          <!-- Dynamic subheadline and fallback -->
          <p class="mb-6 text-base text-[#343A40] font-normal leading-7">
            {{
              heroData?.subheadline ||
              'Logistic Journey gives you full control, real-time visibility, and reliable deliveries—without the chaos of paper and spreadsheets.'
            }}
          </p>

          <!-- Dynamic buttons and fallback -->
          <div class="flex gap-4">
            <NuxtLink to="/Request_demo">
              <button class="solid-btn">
                {{ heroData?.buttons?.[0]?.text || 'Book a Demo' }}
              </button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <button class="text-[#225AD6]">
                {{ heroData?.buttons?.[1]?.text || 'Talk to Our Team' }}
              </button>
            </NuxtLink>
          </div>
        </motion.div>

        <!-- Right-side images -->
        <div class="max-w-lg md:max-w-full md:w-2/5 lg:w-2/4 xl:w-2/3 px-4 sm:px-0">
          <div class="hidden md:flex justify-end -mb-28">
            <img
              class="rounded-md"
              src="/public/images/Header/Header 2/1/Group 1000008814.png"
              alt="header image"
            />
          </div>
          <div class="hidden md:flex items-center justify-end col-span-1">
            <img
              class="rounded-md"
              :src="heroData?.background?.image || '/images/Header/1/close-up-delivery-person-with-parcel 1.png'"
              alt="header image"
            />
          </div>
        </div>
      </div>

      <div class="hidden md:flex -mt-24 lg:-mt-28 xl:-mt-30 justify-end pl-[7cm] lg:pr-[4.5cm] xl:pr-[7.5cm]">
        <home-rate />
      </div>

      <!-- Mobile version -->
      <div class="flex md:hidden justify-center px-4 mt-8 mb-16">
        <div class="flex flex-col-reverse xs:flex-row xs:items-end mx-auto items-center">
          <!-- <img
            class="xs:-mr-[3cm] z-40 w-[6cm]"
            src="/public/images/Header/Header 3/1/Group 8.png"
            alt="header image"
          /> -->
          <div class="xs:-mr-[5cm] z-40 -mt-8"><home-rate class=""/></div> 
          <img
            class="xs:max-w-[10cm] md:max-w-[12cm] rounded-md"
            :src="heroData?.background?.image || '/images/Header/1/close-up-delivery-person-with-parcel 1.png'"
            alt="header image"
          />
        </div>
      </div>
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
    const heroBlock = blocks.find((b: any) => b.type === 'Home Hero')

    if (heroBlock && heroBlock.data) {
      heroData.value = heroBlock.data
    }
  } catch (error) {
    console.error('Failed to load hero section:', error)
  }
})
</script>

<style scoped>
h1 {
  @apply text-[34px] lg:text-[45px] xl:text-[47px] lg:leading-[60px] font-bold -mt-1;
}

.the-width {
  @apply max-w-[1500px];
}
</style>
