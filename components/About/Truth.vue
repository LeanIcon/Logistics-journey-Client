<template>
  <div class="overflow-hidden" ref="sectionRef">
    <div class="highest-width sm:flex py-24">
      <div class="flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-10">
        <motion.div 
          class="md:w-1/2"
          :initial="{ x: 100, opacity: 0 }"
          :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <img v-if="data?.image?.path" :src="data.image.path" :alt="data.image.alt || 'Logistics Journey team'" class="rounded-xl w-full" />
        <img v-else src="/public/images/About/people.jpg" alt="Logistics Journey team" class="rounded-xl w-full" />
        </motion.div>
        
        <motion.div 
          class="md:w-1/2 space-y-6 mb-25"
          :initial="{ x: -100, opacity: 0 }"
          :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <h3 v-if="data?.intro" class="text-xl font-semibold mb-2 text-gray-800">
            {{ data.intro }}
          </h3>
          
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {{ data?.headline || 'Technology alone doesn\'t change an industry. People do!' }}
          </h2>
          
          <div v-if="data?.paragraphs && data.paragraphs.length > 0" v-for="paragraph in data.paragraphs" :key="paragraph" class="mb-2 text-gray-700">
          <p>{{ paragraph }}</p>
        </div>
        <div v-else class="mb-2 text-gray-700">
          <p>Logistics is fundamentally about people. It's about the drivers who navigate our roads, the warehouse staff who manage inventory, the dispatchers who coordinate deliveries, and the customers who rely on timely service.</p>
          <p>Technology can enhance these processes, but it cannot replace the human element that makes logistics work. Our platform is designed to empower people, not replace them.</p>
        </div>
        <p v-if="data?.quote?.text" class="mt-4 text-gray-700 flex items-start">
          <span class="mr-2 text-xl">{{ data.quote.emoji || '👉' }}</span>
          {{ data.quote.text }}
        </p>
        </motion.div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import { useInView } from '~/composables/useInView'

defineProps<{
  data?: {
    intro: string
    headline: string
    paragraphs: string[]
    quote?: {
      emoji: string
      text: string
    }
    image?: {
      path: string
      url: string
      alt: string
    }
  }
}>()

const { inView, sectionRef } = useInView(0.2)
</script>


