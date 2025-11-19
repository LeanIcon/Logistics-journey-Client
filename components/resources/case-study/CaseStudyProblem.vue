<template>
  <div class="mb-8">
    <h3 class="text-lg font-semibold mb-4">The Problem</h3>
    <ul class="space-y-4 text-gray-700">
      <li v-for="(item, idx) in problems" :key="idx" class="flex gap-2">
        <span class="font-bold">{{ idx + 1 }}.</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  problems: { type: Array as PropType<string[]>, default: () => [] },
});
</script>
