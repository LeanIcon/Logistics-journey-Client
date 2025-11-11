<template>
  <div class="mb-8 p-4 bg-white rounded-lg shadow flex flex-col gap-2">
    <div class="text-gray-700 italic">"{{ testimonial }}"</div>
    <div class="text-sm text-gray-500 mt-2">- {{ author }}</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ testimonial: string; author: string }>();
</script>
