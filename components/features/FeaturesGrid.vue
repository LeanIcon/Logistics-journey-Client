<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <FeatureCard
      v-for="feature in features"
      :key="feature.id"
      :title="feature.title"
      :description="feature.description"
    />
  </div>
</template>

<script lang="ts" setup>
import FeatureCard from "./FeatureCard.vue";

defineProps<{
  features: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}>();
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
