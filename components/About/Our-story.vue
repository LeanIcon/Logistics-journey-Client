<template>
  <section class="highest-width our-story-section mx-auto overflow-hidden" ref="sectionRef">
    <!-- Desktop & Tablet version -->
    <div class="sm:flex">
      <div class="mx-auto py-24">
        <div class="block md:flex items-center gap-6 lg:gap-10">
          
          <motion.div 
            class="md:w-1/2 space-y-6 mb-25"
            :initial="{ x: -100, opacity: 0 }"
            :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
            :transition="{ duration: 0.8 }"
          >
            <div class="flex items-center gap-2">
              <span class="text-primary inline-flex items-center gap-2 bg-[#f8e0c3] rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4001 4.62683C13.4001 4.98683 13.2068 5.3135 12.9001 5.48016L11.7401 6.10683L10.7534 6.6335L8.70676 7.74016C8.48676 7.86016 8.24676 7.92016 8.0001 7.92016C7.75343 7.92016 7.51343 7.86016 7.29343 7.74016L3.1001 5.48016C2.79343 5.3135 2.6001 4.98683 2.6001 4.62683C2.6001 4.26683 2.79343 3.94016 3.1001 3.7735L4.41343 3.06683L5.4601 2.50016L7.29343 1.5135C7.73343 1.2735 8.26676 1.2735 8.70676 1.5135L12.9001 3.7735C13.2068 3.94016 13.4001 4.26683 13.4001 4.62683Z" fill="#DF900A"/>
                  <path d="M6.5999 8.52676L2.6999 6.58009C2.3999 6.42676 2.05323 6.44676 1.76657 6.62009C1.4799 6.79343 1.31323 7.10009 1.31323 7.43343V11.1201C1.31323 11.7601 1.66657 12.3334 2.2399 12.6201L6.1399 14.5668C6.27323 14.6334 6.4199 14.6668 6.56657 14.6668C6.7399 14.6668 6.91323 14.6201 7.06657 14.5201C7.35323 14.3468 7.5199 14.0401 7.5199 13.7068V10.0201C7.52657 9.38676 7.17323 8.81343 6.5999 8.52676Z" fill="#DF900A"/>
                  <path d="M14.6867 7.43325V11.1199C14.6867 11.7533 14.3334 12.3266 13.7601 12.6133L9.86006 14.5666C9.72672 14.6333 9.58006 14.6666 9.43339 14.6666C9.26006 14.6666 9.08672 14.6199 8.92672 14.5199C8.64672 14.3466 8.47339 14.0399 8.47339 13.7066V10.0266C8.47339 9.38659 8.82672 8.81325 9.40006 8.52659L10.8334 7.81325L11.8334 7.31325L13.3001 6.57992C13.6001 6.42659 13.9467 6.43992 14.2334 6.61992C14.5134 6.79325 14.6867 7.09992 14.6867 7.43325Z" fill="#DF900A"/>
                  <path d="M11.74 6.10667L10.7533 6.63333L4.41333 3.06667L5.46 2.5L11.58 5.95333C11.6467 5.99333 11.7 6.04667 11.74 6.10667Z" fill="#DF900A"/>
                  <path d="M11.8333 7.31348V8.82681C11.8333 9.10014 11.6066 9.32681 11.3333 9.32681C11.0599 9.32681 10.8333 9.10014 10.8333 8.82681V7.81348L11.8333 7.31348Z" fill="#DF900A"/>
                </svg>
                {{ data?.eyebrow || 'Our Story' }}
              </span>
            </div>

            <h2 class="text-4xl font-bold text-gray-900">{{ data?.section?.headline || 'Logistic Journey' }}</h2>
            <div v-if="data?.paragraphs && data.paragraphs.length > 0" v-for="paragraph in data.paragraphs" :key="paragraph" class="text-gray-600 leading-relaxed">
              <p>{{ paragraph }}</p>
            </div>
            <div v-else>
              <p class="text-gray-600 leading-relaxed">
                Somewhere between the depot and the doorstep, that promise often breaks.
                Routes twist. Communication scatters. The paper trail goes missing.
                Customers wait. Teams scramble. The story ends... not the way anyone hoped.
              </p>
              <p class="text-gray-600 leading-relaxed">
                We saw this happening again and again. Not because people didn't care –
                but because the systems they were given weren't built for a world that
                changes by the hour.
              </p>
              <p class="text-gray-600 leading-relaxed">
                So we built <span class="font-semibold">Logistic Journey</span>.
              </p>
              <p class="text-gray-600 leading-relaxed">
                Not just a tool, but a
                <span class="font-semibold">new way of seeing logistics</span>. A way that
                gives teams the clarity, control, and connection they need to keep their
                promises.
              </p>
            </div>
          </motion.div>

          <motion.div 
            class="md:w-1/2"
            :initial="{ x: 100, opacity: 0 }"
            :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
            :transition="{ duration: 0.8 }"
          >
            <img
              src="/images/About/logistic/meeting.jpg"
              alt="Logistics Journey Team Meeting"
              class="rounded-xl w-full"
            />
          </motion.div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import { useInView } from '~/composables/useInView'

defineProps<{
  data?: {
    eyebrow: string
    section: {
      headline: string
    }
    paragraphs: string[]
  }
}>()

const { inView, sectionRef } = useInView(0.2)
</script>

<style scoped>
.our-story-section {
  background-color: #ffffff;
}
.text-primary {
  color: #df900a;
}
</style>

