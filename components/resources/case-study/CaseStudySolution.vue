<template>
  <div class="mb-8">
    <h3 class="text-lg font-semibold mb-4">What We Did to Solve It</h3>
    <ul class="space-y-4 text-gray-700">
      <li v-for="(item, idx) in solutions" :key="idx" class="flex gap-2">
        <span class="font-bold">{{ idx + 1 }}.</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  solutions: { type: Array as PropType<string[]>, default: () => [] },
});
</script>
