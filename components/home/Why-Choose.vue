<template>
  <div class="bg-[#E9EFFD]">
  <div class="highest-width text-center space-y-6 py-24 mx-auto overflow-x-hidden" ref="sectionRef">
        <motion.div class="text-center space-y-6 mx-auto"
             :initial="{ y: 100, opacity: 0 }"
             :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
             :transition="{ duration: 0.8 }"
        >
            <h2>Why Choose Logistic Journey</h2>
            <p class="max-w-lg mx-auto">
                {{ why_chooseData?.description || "Discover how Logistic Journey can help optimize your fleet management and improve business operations." }}
            </p> 
        </motion.div> 
        
        <motion.div class="flex justify-center mx-auto"
            :initial="{ x: -100, opacity: 0 }"
            :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
            :transition="{ duration: 0.8 }"
        >
            <img :src= "why_chooseData?.feature_image">
        </motion.div>
          
        <div class="flex justify-center">
          <motion.div
            class="grid md:grid-cols-2 gap-6 items-center justify-center place-items-center mx-auto"
            :initial="{ y: 100, opacity: 0 }"
            :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
            :transition="{ duration: 0.8 }"
          >
            <div
              v-for="(point, index) in why_chooseData?.points || fallbackPoints"
              :key="index"
              :class="[
                'flex gap-1 items-center bg-white p-2 rounded-full shadow-sm',
                (index >= (why_chooseData?.points?.length || fallbackPoints.length) - 2) 
                  ? '' 
                  : ''
              ]"
            >
              <svg
                width="20"
                height="20"
                class="shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.5512 1.44385C9.55213 1.44385 7.59798 2.03663 5.93584 3.14724C4.2737 4.25784 2.97822 5.83639 2.21323 7.68326C1.44823 9.53013 1.24807 11.5624 1.63806 13.523C2.02805 15.4836 2.99068 17.2846 4.40422 18.6981C5.81775 20.1117 7.6187 21.0743 9.57933 21.4643C11.54 21.8543 13.5722 21.6541 15.4191 20.8891C17.2659 20.1241 18.8445 18.8286 19.9551 17.1665C21.0657 15.5043 21.6585 13.5502 21.6585 11.5512C21.6585 8.87054 20.5936 6.2997 18.6981 4.40421C16.8026 2.50872 14.2318 1.44385 11.5512 1.44385ZM10.1073 15.5875L6.49751 11.9777L7.64585 10.8292L10.1073 13.2905L15.4569 7.94141L16.6089 9.08635L10.1073 15.5875Z" fill="#225AD6" />
              </svg>

              <p>{{ point }}</p>
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

const { getPagesBySlug } = useApi();
const { inView, sectionRef } = useInView(0.2);

const why_chooseData = ref<any>(null);

const fallbackPoints = [
  "Reduce wasted trips and costs",
  "Delight Customers with reliable service",
  "Give managers real time control",
  "Replace chaos with streamlined workflow",
];

onMounted(async () => {
  try {
    const response = await getPagesBySlug("home");
    const blocks = response?.data?.blocks || [];
    const why_chooseBlock = blocks.find((b: any) => b.type === "WhyChoose");

    if (why_chooseBlock && why_chooseBlock.data) {
      const data = why_chooseBlock.data;
      why_chooseData.value = {
        title: data.title || "Why Choose Logistic Journey",
        feature_image: data.feature_image || "/images/whyChoose.png",
        description:
          data.description ||
          "Discover how Logistic Journey can help optimize your fleet management and improve business operations.",
        points: data.benefits?.map((b: any) => b.title) || fallbackPoints,
      };
    }
  } catch (error) {
    console.error("Failed to load WhyChoose section:", error);
  }
});
</script>


<style>
    p {
      color: #343A40;
    }
</style>