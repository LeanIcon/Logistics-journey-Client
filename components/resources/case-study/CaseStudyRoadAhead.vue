<template>
  <div class="mb-8">
    <h3 class="text-lg font-semibold mb-4">The Road Ahead</h3>
    <div class="text-gray-700">{{ roadAhead }}</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ roadAhead: string }>();
</script>
