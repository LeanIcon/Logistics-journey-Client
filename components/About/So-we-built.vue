<template>
  <div class="bg-[#eef4f9] hidden sm:flex">
    <div class="highest-width text-center space-y-6 py-20">
        <div class="text-center space-y-6 pb-20">
            <h2 class="text-3xl md:text-4xl font-bold">{{ data?.headline || 'So we built Logistics Journey' }}</h2>
        </div>

        <div v-if="data?.features && data.features.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        <div v-for="feature in data.features" :key="feature.title" class="flex flex-col items-start">
          <img v-if="feature.icon" :src="feature.icon" :alt="`${feature.title} icon`" class="w-10 h-10 mb-4" />
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        <div v-for="item in built_items" :key="item.id" class="flex flex-col items-start">
          <img :src="item.icon" :alt="`${item.title} icon`" class="w-10 h-10 mb-4" />
          <h3 class="text-xl font-semibold mb-3">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Built } from '~/data/built.js';

const built_items = ref<{ id: number; icon: string; title: string; description: string }[]>([]);

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

onMounted(() => {
  built_items.value = Built.map(item => ({
    id: item.id,
    icon: item.icon,
    title: item.title,
    description: item.description,
  }));
});
</script>

<style scoped>
h2 {
  color: #0f172a;
}
p {
  color: #374151;
}
</style>


