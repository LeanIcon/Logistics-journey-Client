<template>
  <div class="bg-gray-100 p-4 rounded-lg">
    <h3 class="font-semibold">{{ question }}</h3>
    <p>{{ answer }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  question: string;
  answer: string;
}>();
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
