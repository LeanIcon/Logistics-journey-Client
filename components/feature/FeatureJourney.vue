<template>
  <section class="highest-width flex flex-col mlg:flex-row items-center justify-between gap-16 mlg:gap-10 xl:gap-20 py-24 bg-[#F8F8F2] overflow-hidden" ref="sectionRef">
    <!-- Left: Text and features -->
    <motion.div class="w-full mlg:w-1/2 order-1 mlg:order-1"
      :initial="{ x: -100, opacity: 0 }"
      :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h2 class=" mb-6">{{ journeyData?.headline || 'Plan Every Journey With Ease' }}</h2>
      <p class="text-[#23272A] text-mlg mb-8">{{ journeyData?.description || 'Simple complex logistics planing. With Logistic Journey, you can create, assign, and track delivery routes in minutes - reducing dispatcher stress and keeping drivers on scehdule.' }}</p>
      <ul class="space-y-6 feature-list">
        <li v-for="feature in journeyData?.features || [
          { title: 'Customizable Journey Setup', description: 'Define routes, assign drivers, and set delivery dates with just a few clicks.' },
          { title: 'Order Integration', description: 'Import and manage orders directly within each journey.' },
          { title: 'Cost Tracking', description: 'Automatically calculate delivery, fuel, and extra costs for better budget control.' },
          { title: 'Driver & Vehicle Assignment', description: 'Ensure the right driver and vehicle are matcherd for each job.' }
        ]" :key="feature.title" class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="text-gray-800"><span class="font-medium  feature-title">{{ feature.title }}</span> – {{ feature.description }}</span>
        </li>
      </ul>
    </motion.div>

    <motion.div class="w-full max-w-md mlg:max-w-full mlg:w-1/2 flex justify-center order-2 mlg:order-2 relative overflow-hidden"
        :initial="{ y: 100, opacity: 0 }"
        :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
    >
      <img
        class="hidden mlg:flex w-full rounded-3xl object-cover"
        src="/public/images/Feature/feature_journey.png"
        alt="Feature image"
      />
      <img
        class="flex mlg:hidden w-full rounded-3xl object-cover"
        src="/public/images/Feature/feature_journey2.png"
        alt="Feature image"
      />
    </motion.div>

  </section>
</template>

<script lang="ts" setup>
  import { onMounted, ref, computed } from 'vue'
  import { motion } from "motion-v";
  import { useInView } from '~/composables/useInView'
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
  const { inView, sectionRef } = useInView(0.2)

  const journeyData = computed(() => {
    if (pageData.value?.blocks) {
      return pageData.value.blocks.find(block => block.type === 'Journey')?.data
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

<style scoped>
.feature-list {
  color: #4B5563; /* gray for body text */
}

.feature-title {
  color: #23272A; /* dark title same as heading */
  font-weight: 400;
}

</style>