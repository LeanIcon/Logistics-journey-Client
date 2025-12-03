<template>
  <div class="bg-[#FAFAFA] py-24">
  <div class="highest-width" ref="sectionRef">
    <!-- Section Title -->
    <motion.div 
      class="text-center space-y-6 pb-20 mx-auto"
      :initial="{ y: 100, opacity: 0 }"
      :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h2>{{ problemData?.title || 'The Problem with Deliveries Today' }}</h2>
      <p class="max-w-lg mx-auto">
        {{
          problemData?.description ||
          "Without real-time visibility, your fleet becomes a silent money drain. Here's what it's costing you."
        }}
      </p>
    </motion.div>

    <!-- Content Section -->
    <div class="grid md:grid-cols-2 gap-8 lg:gap-16 items-center justify-center overflow-x-hidden">
      <!-- Side Image -->
      <motion.div
        class="order-2 md:order-1 mx-auto max-w-md"
        :initial="{ x: -100, opacity: 0 }"
        :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <img
          :src="problemData?.side_image || '/images/Deliveries/Placeholder Image.png'"
          alt="Delivery Problem Image"
        />
      </motion.div>

      <!-- Problems List -->
      <motion.div
        class="order-1 md:order-2 grid sm:grid-cols-2 gap-8 md:gap-16"
        :initial="{ x: 100, opacity: 0 }"
        :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <div
          v-for="(problem, index) in problemList"
          :key="index"
          class="text-center sm:text-start"
        >
          <div class="flex justify-center sm:justify-start">
            <img
              :src="problem.icon || '/images/Deliveries/remove 1.png'"
              alt="Problem Icon"
              class="w-12 h-12 mb-4"
            />
          </div>
          <h6 class="text-xl font-semibold mb-4">{{ problem.title }}</h6>
          <p>{{ problem.description }}</p>
        </div>
      </motion.div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { motion } from "motion-v";
import { useApi } from "~/composables/useApi";
import { useInView } from "~/composables/useInView";
import { deliveries } from "~/data/deliveries.js"; // fallback static list

const { getPagesBySlug } = useApi();
const { inView, sectionRef } = useInView(0.2);

const problemData = ref<any>(null);
const problemList = ref(deliveries);

onMounted(async () => {
  try {
    const response = await getPagesBySlug("home");
    const blocks = response?.data?.blocks || [];
    const problemBlock = blocks.find((b: any) => b.type === "Problem");

    if (problemBlock && problemBlock.data) {
      const data = problemBlock.data;

      problemData.value = {
        title: data.title,
        description: data.description,
        side_image: data.side_image || null,
      };

      // use API-provided problems if available, otherwise fallback
      problemList.value = data.problems?.length ? data.problems : deliveries;
    }
  } catch (error) {
    console.error("Failed to load Problem section:", error);
  }
});
</script>

<style scoped>
p {
  @apply text-base leading-relaxed text-[#343A40];
}
</style>