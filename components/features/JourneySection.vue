<template>
  <section class="bg-[#F8F8F2] py-12 overflow-hidden" ref="sectionRef">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        :initial="{ x: -100, opacity: 0 }"
        :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <h2 class="text-3xl font-bold text-gray-800">
          Plan Every Journey With Ease
        </h2>
        <p class="mt-4 text-gray-600">
          Simply customize planning routes with Logistic Journey, which can
          reduce stress and keep drivers on schedule.
        </p>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>Customizable Journey Setup</li>
          <li>Optimize Route Planning</li>
          <li>Cost Management</li>
          <li>Driver Assignment</li>
        </ul>
      </motion.div>
      <motion.div
        :initial="{ x: 100, opacity: 0 }"
        :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <img
          src="/public/images/feature map/journey creation.png"
          alt="Journey Creation"
          class="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
import { useInView } from '~/composables/useInView'
  
  const { inView, sectionRef } = useInView(0.2)

</script>
