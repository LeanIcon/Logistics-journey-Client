<template>
  <div class="bg-[#eef4f9]">
    <div class="highest-width hidden sm:flex py-20 mx-auto text-center">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">So we built Logistics Journey</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
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