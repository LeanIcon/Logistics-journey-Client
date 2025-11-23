<template>
  <div class="bg-[#102A63]" ref="sectionRef">
    <div class="highest-width text-white text-center space-y-6 py-24 mx-auto">
      <!-- Title Section -->
      <motion.div
        class="text-center space-y-6 pb-14 mx-auto"
        :initial="{ y: 100, opacity: 0 }"
        :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <h2>{{ solutionData?.title || "The Logistic Journey Solution" }}</h2>
        <p class="max-w-lg mx-auto">
          {{
            solutionData?.subtitle ||
            "From failed deliveries to full control — here's how we help teams move smarter."
          }}
        </p>
      </motion.div>

      <!-- Solutions List -->
      <div class="order-1 md:order-2 grid sm:grid-cols-3 items-stretch gap-8">
        <motion.div
          v-for="(solution, index) in journeySolutions"
          :key="index"
          class="bg-[#1A46A7] px-4 py-6 rounded-lg flex flex-col h-full w-full"
          :initial="{ y: 80, opacity: 0 }"
          :animate="inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }"
          :transition="{ duration: 0.8, delay: index * 0.15 }"
        >
          <div>
            <img
              :src="solution.icon || '/images/Solutions/route.png'"
              alt="Solution Icon"
              class="w-12 h-12 mb-4"
            />
          </div>
          <h6 class="text-xl text-start font-semibold mb-4">
            {{ solution.title }}
          </h6>
          <div class="flex items-start space-x-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 mt-1"
            >
              <path
                d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z"
                fill="white"
              />
            </svg>
            <p class="text-start leading-relaxed">
              {{ solution.description }}
            </p>
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
import { solutions } from "~/data/journey_solutions.js"; // fallback list

const { getPagesBySlug } = useApi();
const { inView, sectionRef } = useInView(0.2);

const solutionData = ref<any>(null);
const journeySolutions = ref(solutions);

onMounted(async () => {
  try {
    const response = await getPagesBySlug("home");
    const blocks = response?.data?.blocks || [];
    const solutionBlock = blocks.find((b: any) => b.type === "Solution");

    if (solutionBlock && solutionBlock.data) {
      const data = solutionBlock.data;

      solutionData.value = {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        side_image: data.side_image || null,
      };

      // Use API-provided solutions if available, otherwise fallback
      journeySolutions.value = data.cards?.length ? data.cards : solutions;
    }
  } catch (error) {
    console.error("Failed to load Solution section:", error);
  }
});
</script>

<style scoped>
p {
  color: white;
}
</style>
