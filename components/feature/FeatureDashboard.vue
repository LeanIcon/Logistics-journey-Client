<template>

  <section class="highest-width flex flex-col mlg:flex-row items-center justify-center gap-16 mlg:gap-10 xl:gap-20 py-20 bg-white overflow-hidden" ref="sectionRef">
    <!-- Left: Image -->
    <motion.div class="w-full mlg:w-1/2 max-w-md mlg:max-w-full flex justify-center order-2 mlg:order-1 relative overflow-hidden rounded-3xl"
      :initial="{ x: -100, opacity: 0 }"
      :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <img src="/public/images/Feature/map.jpg" alt="Feature image" class="w-full max-w-2xl rounded-3xl object-cover" />
      <!-- background effect  -->
      <div class="absolute inset-0 -z-10 bg-[#E9EEFF] rounded-3xl scale-105"></div>
    </motion.div>
    <!-- Right: Text and features -->
    <motion.div class="w-full mlg:w-1/2 order-1 mlg:order-2"
      :initial="{ x: 100, opacity: 0 }"
      :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h2 class="mb-6">{{ dashboardData?.headline || 'A Dashboard That Powers Your Entire Fleet' }}</h2>
      <p class="text-[#23272A] text-mlg mb-8">{{ dashboardData?.description || 'Get full visibility of your logistics operations in one place. Logistic Journey’s dashboard helps you track vehicles, drivers, and deliveries in real-time — so you can reduce costs, prevent delays, and deliver on time, every time.' }}</p>
      <ul class="space-y-6 feature-list">
        <li v-for="feature in dashboardData?.right_column?.features || [
          { title: 'Real-Time Vehicle Tracking', description: 'Monitor every vehicle’s location, route, and status live.' },
          { title: 'Smart Route Optimization', description: 'Cut wasted fuel and time with AI-driven route planning.' },
          { title: 'Delivery Performance Insights', description: 'Track on-time rates, delays, and customer satisfaction metrics.' },
          { title: 'Driver & Fleet Analytics', description: 'Measure driver productivity, vehicle health, and operational costs.' }
        ]" :key="feature.title" class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-medium feature-title">{{ feature.title }}</span> – <span class="font-light text-black">{{ feature.description }}</span></span>
        </li>
      </ul>
    </motion.div>
  </section>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { motion } from "motion-v";
  import { useInView } from '~/composables/useInView'

  interface Props {
    data: any
  }

  const props = withDefaults(defineProps<Props>(), {
    data: null
  })

  const { inView, sectionRef } = useInView(0.2)

  const dashboardData = computed(() => props.data)
</script>

<style scoped>
li{
    line-height: 1.5rem;
}
.feature-list {
  color: #000000; /* gray for body text */
}

.feature-title {
  color: #23272A; /* dark title same as heading */
  font-weight: 500;
}

</style>