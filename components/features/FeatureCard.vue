<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-md">
    <h3 class="font-semibold">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
}>();
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
