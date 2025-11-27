<template>

  <section class="highest-width flex flex-col mlg:flex-row items-center justify-between gap-16 mlg:gap-8 xl:gap-20 py-24 bg-white overflow-hidden" ref="sectionRef">
    <!-- Left: Image -->
    <motion.div class="w-full mlg:w-1/2 flex justify-center mlg:justify-end order-2 mlg:order-1 relative overflow-hidden rounded-3xl"
          :initial="{ y: 100, opacity: 0 }"
          :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
          :transition="{ duration: 0.8 }"
    >
      <img
        class="w-full max-w-2xl rounded-3xl object-cover "
        :src=" driverData?.image.url || '/images/Feature/Feature2/phone-map.jpg'"
        alt="Feature image"
      />
      <!-- background effect  -->
      <div class="absolute inset-0 -z-10 bg-[#E9EEFF] rounded-3xl scale-105"></div>
    </motion.div>

    <!-- Right: Text and features -->
    <motion.div class="w-full mlg:w-1/2 order-1 mlg:order-2"
        :initial="{ x: 100, opacity: 0 }"
        :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
    >
      <h2 class="mb-6">
        {{ driverData?.headline || 'Empower Drivers On the Go' }}
      </h2>
      <p class="text-[#23272A] text-mlg mb-8">
        {{ driverData?.description || 'With the Logistic mobile app, drivers stay connected, informed, and efficient — every step of the way.' }}
      </p>
      <ul class="space-y-6 feature-list">
        <li v-for="feature in driverData?.features || [
          { title: 'Smart Scheduling', description: 'Drivers see upcoming and in-progress journeys right from their dashboard.' },
          { title: 'Route Guidance', description: 'Clear start and destination details with integrated maps for easy navigation.' },
          { title: 'Real-time Updates', description: 'Orders and delivery stops displayed directly on an interactive map.' },
          { title: 'Seamless Coordination', description: 'Journey details, payloads, and progress all accessible in one place.' }
        ]" :key="feature.title" class="flex items-start gap-3">
          <span class="mt-1">
            <svg width="20" height="20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#225AD6" />
              <path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>

          <span>
            <span class="font-medium text-black">{{ feature.title }}</span> – <span class="font-light text-black">{{ feature.description }}</span>
          </span>
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

  const driverData = computed(() => props.data)
</script>


<style scoped>

</style>