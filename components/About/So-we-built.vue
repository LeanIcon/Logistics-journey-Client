<template>
  <div class="bg-[#eef4f9]  sm:flex">
    <div class="highest-width text-center space-y-6 py-20">
        <div class="text-center space-y-6 pb-12">
            <h2>{{ data?.headline || 'So we built Logistic Journey' }}</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        <div v-for="(item, index) in built_items" :key="item.id" class="flex flex-col items-start">
          <img :src="item.icon" :alt="`${item.title} icon`" class="w-14 h-14 mb-4" />
          <h3 class="text-xl font-medium mb-3">{{ data?.features && data.features[index] ? data.features[index].title : item.title }}</h3>
          <p class="text-gray-600">{{ data?.features && data.features[index] ? data.features[index].description : item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Built } from '~/data/built.js';

const built_items = ref(Built.map(item => ({
  id: item.id,
  icon: item.icon,
  title: item.title,
  description: item.description,
})));

defineProps<{
  data?: {
    headline: string
    background_color: string
    features: Array<{
      icon: string | null
      title: string
      description: string
    }>
  }
}>()
</script>

<style scoped>
h2 {
  color: #0f172a;
}
p {
  color: #374151;
}
</style>