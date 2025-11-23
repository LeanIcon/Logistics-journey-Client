<template>
  <div class="hidden md:flex">
    <div
      class="highest-width text-center space-y-6 py-24 mx-auto overflow-hidden"
      ref="sectionRef"
    >
      <motion.div
        class="text-center space-y-6 pb-8 mx-auto"
        :initial="{ y: 100, opacity: 0 }"
        :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <div
          class="bg-[#FEF5E7] flex space-x-1 p-3 rounded-full text-center items-center justify-center max-w-36 mx-auto"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4001 4.62683C13.4001 4.98683 13.2068 5.3135 12.9001 5.48016L11.7401 6.10683L10.7534 6.6335L8.70676 7.74016C8.48676 7.86016 8.24676 7.92016 8.0001 7.92016C7.75343 7.92016 7.51343 7.86016 7.29343 7.74016L3.1001 5.48016C2.79343 5.3135 2.6001 4.98683 2.6001 4.62683C2.6001 4.26683 2.79343 3.94016 3.1001 3.7735L4.41343 3.06683L5.4601 2.50016L7.29343 1.5135C7.73343 1.2735 8.26676 1.2735 8.70676 1.5135L12.9001 3.7735C13.2068 3.94016 13.4001 4.26683 13.4001 4.62683Z"
              fill="#DF900A"
            />
            <path
              d="M6.5999 8.52676L2.6999 6.58009C2.3999 6.42676 2.05323 6.44676 1.76657 6.62009C1.4799 6.79343 1.31323 7.10009 1.31323 7.43343V11.1201C1.31323 11.7601 1.66657 12.3334 2.2399 12.6201L6.1399 14.5668C6.27323 14.6334 6.4199 14.6668 6.56657 14.6668C6.7399 14.6668 6.91323 14.6201 7.06657 14.5201C7.35323 14.3468 7.5199 14.0401 7.5199 13.7068V10.0201C7.52657 9.38676 7.17323 8.81343 6.5999 8.52676Z"
              fill="#DF900A"
            />
            <path
              d="M14.6867 7.43325V11.1199C14.6867 11.7533 14.3334 12.3266 13.7601 12.6133L9.86006 14.5666C9.72672 14.6333 9.58006 14.6666 9.43339 14.6666C9.26006 14.6666 9.08672 14.6199 8.92672 14.5199C8.64672 14.3466 8.47339 14.0399 8.47339 13.7066V10.0266C8.47339 9.38659 8.82672 8.81325 9.40006 8.52659L10.8334 7.81325L11.8334 7.31325L13.3001 6.57992C13.6001 6.42659 13.9467 6.43992 14.2334 6.61992C14.5134 6.79325 14.6867 7.09992 14.6867 7.43325Z"
              fill="#DF900A"
            />
            <path
              d="M11.74 6.10667L10.7533 6.63333L4.41333 3.06667L5.46 2.5L11.58 5.95333C11.6467 5.99333 11.7 6.04667 11.74 6.10667Z"
              fill="#DF900A"
            />
            <path
              d="M11.8333 7.31348V8.82681C11.8333 9.10014 11.6066 9.32681 11.3333 9.32681C11.0599 9.32681 10.8333 9.10014 10.8333 8.82681V7.81348L11.8333 7.31348Z"
              fill="#DF900A"
            />
          </svg>
          <span class="text-[15px] font-light" style="color: #df900a">Resources</span>
        </div>
        <h2>Case Study</h2>
      </motion.div>

      <div class="grid gap-14 items-center md:grid-cols-2 justify-between">
        <motion.div
          :initial="{ x: -100, opacity: 0 }"
          :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <img
            :src="featured?.featured_image?.url || '/images/cs2.jpg'"
            alt=""
          />
        </motion.div>
        <motion.div
          :initial="{ x: 100, opacity: 0 }"
          :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <img
            :src="'/images/b12.png'"
            alt="client logo"
            class="h-16 w-auto rounded -ml-2"
          />
          <p class="text-start pt-5 pb-4" v-if="featured">
            {{
              featured.client?.quote || featured?.content?.introduction || "—"
            }}
          </p>
          <div
            class="flex items-center space-x-6 mt-4 mb-6"
            v-if="featured?.client"
          >
            <div>
              <img
                class="w-16 h-16 object-cover rounded-full border-4 border-red-400 shadow-2xl"
                :src="featured?.client?.logo || '/images/b12.png'"
              />
            </div>
            <div>
              <h6 class="text-start text-lg font-semibold">
                {{ featured.client?.quote_author || featured.client?.name }}
              </h6>
              <span class="text-start text-xs opacity-80">{{
                featured.client?.quote_author_title || ""
              }}</span>
            </div>
          </div>
          <div class="text-start">
            <NuxtLink
              v-if="featured?.slug"
              :to="`/case-study/${featured.slug}`"
              class="border-b border-[#225AD6] font-light pb-1"
              >Read full case study</NuxtLink
            >
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import { useInView } from "~/composables/useInView";
import { ref, onMounted } from "vue";
import { fetchFeaturedCaseStudy, type CaseStudy } from "~/api/caseStudies";

const { inView, sectionRef } = useInView(0.2);

const featured = ref<CaseStudy | null>(null);

onMounted(async () => {
  try {
    featured.value = await fetchFeaturedCaseStudy();
  } catch (err) {
    console.error("Failed to load featured case study", err);
  }
});
</script>

<style></style>
