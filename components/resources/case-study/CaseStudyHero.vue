<template>
  <div class="flex flex-col lg:flex-row gap-8 mb-8">
    <div class="flex-1">
      <img
        :src="image"
        alt="Case Study Hero"
        class="rounded-lg w-full h-[260px] object-cover"
      />
    </div>
    <div class="flex-1 bg-white rounded-lg shadow p-6 flex flex-col gap-2">
      <h2 class="text-lg font-semibold">{{ client }}</h2>
      <div class="text-sm text-gray-600">Industry: {{ industry }}</div>
      <div class="text-sm text-gray-600">Location: {{ location }}</div>
      <div class="text-sm text-gray-600">
        Engagement Type: {{ engagementType }}
      </div>
      <div class="text-sm text-gray-600">
        Implementation Period: {{ implementationPeriod }}
      </div>
      <div class="text-sm text-gray-600">
        Solution: <span class="font-medium text-blue-600">{{ solution }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  image: string;
  client: string;
  industry: string;
  location: string;
  engagementType: string;
  implementationPeriod: string;
  solution: string;
}>();
</script>
