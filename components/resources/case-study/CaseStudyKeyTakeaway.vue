<template>
  <div class="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
    <h4 class="font-semibold mb-2">Key Takeaway</h4>
    <div class="text-gray-700">{{ takeaway }}</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ takeaway: string }>();
</script>
