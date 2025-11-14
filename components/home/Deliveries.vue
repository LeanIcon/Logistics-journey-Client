<template>
  <div class="highest-width bg-[#FAFAFA] py-24" ref="sectionRef">
    <motion.div 
      class="text-center space-y-6 pb-20 mx-auto"
      :initial="{ y: 100, opacity: 0 }"
      :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
      :transition="{ duration: 0.8 }"
      >
      <h2>The Problem with Deliveries Today</h2>
      <p class="max-w-lg mx-auto">
        Without real-time visibility, your fleet becomes a silent money drain.
        Here’s what it’s costing you today
      </p>
    </motion.div>

    <div
      class="grid md:grid-cols-2 gap-8 lg:gap-16 items-center justify-center overflow-x-hidden"
    >
      <!-- Image Section -->
      <motion.div class="order-2 md:order-1 mx-auto max-w-md"
        :initial="{ x: -100, opacity: 0 }"
        :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <img
          src="/images/Deliveries/Placeholder Image.png"
          alt="Delivery Placeholder"
        />
      </motion.div>

      <!-- Delivery List -->
      <motion.div class="order-1 md:order-2 grid sm:grid-cols-2 gap-8 md:gap-16"
        :initial="{ x: 100, opacity: 0 }"
        :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <div
          v-for="delivery in deliverList"
          :key="delivery.id"
          class="text-center sm:text-start"
        >
          <div class="flex justify-center sm:justify-start">
            <img
              :src="delivery.icon"
              alt="Delivery Icon"
              class="w-12 h-12 mb-4"
            />
          </div>
          <h6 class="text-xl font-semibold mb-4">{{ delivery.title }}</h6>
          <p>{{ delivery.description }}</p>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { deliveries } from "~/data/deliveries.js";
import { motion } from "motion-v";

const deliverList = ref(deliveries);
const inView = ref(false);
const sectionRef = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        inView.value = entry.isIntersecting;
      });
    },
    { threshold: 0.2 } // 20% visible triggers animation
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  if (observer && sectionRef.value) observer.unobserve(sectionRef.value);
});
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
