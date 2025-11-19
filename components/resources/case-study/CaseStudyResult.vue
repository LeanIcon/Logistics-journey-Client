<template>
  <div class="mb-8">
    <h3 class="text-lg font-semibold mb-4">The Result</h3>
    <ul class="space-y-2 text-gray-700">
      <li v-for="(item, idx) in results" :key="idx" class="flex gap-2">
        <span class="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  results: { type: Array as PropType<string[]>, default: () => [] },
});
</script>
