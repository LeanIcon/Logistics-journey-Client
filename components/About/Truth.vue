<template>
  <div class="highest-width hidden sm:flex py-16">
    <div class="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10">
      <div class="lg:w-1/2">
        <img v-if="data?.image?.path" :src="data.image.path" :alt="data.image.alt || 'Logistics Journey team'" class="rounded-xl w-full" />
        <img v-else src="/public/images/About/people.jpg" alt="Logistics Journey team" class="rounded-xl w-full" />
      </div>
      <div class="lg:w-1/2 space-y-6 mb-25">
        <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ data?.intro || 'But here is the truth:' }}</h3>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
          {{ data?.headline || 'Technology alone doesn’t change an industry. People do!' }}
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
      </div>
    </div>
  </div>

  <div class="block sm:hidden bg-[#18346a] px-6 py-14 text-white">
      <h2 class="text-3xl font-bold leading-tight mb-4">
        Highlight company<br />impact by the numbers
      </h2>
      <p class="text-base leading-relaxed mb-8 text-white/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div class="grid grid-cols-2 gap-y-8 gap-x-6 mb-8">
        <div>
          <div class="text-3xl font-bold mb-1">$30m</div>
          <div class="text-base text-white/80">Customer savings</div>
        </div>
        <div>
          <div class="text-3xl font-bold mb-1">10m+</div>
          <div class="text-base text-white/80">Hours saved</div>
        </div>
        <div>
          <div class="text-3xl font-bold mb-1">200%</div>
          <div class="text-base text-white/80">Year on year growth</div>
        </div>
        <div>
          <div class="text-3xl font-bold mb-1">5k+</div>
          <div class="text-base text-white/80">Downloads</div>
        </div>
      </div>
      <img
        src="/public/images/About/impact.png"
        alt="Company impact illustration"
        class="w-full rounded-2xl"
      />
    </div>
</template>

<script lang="ts" setup>
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
</script>

<style scoped>

</style>
