<template>
  <div class="mb-6 flex flex-col gap-2">
    <nav class="text-xs text-blue-600 mb-2">
      <NuxtLink to="/resources">Resources</NuxtLink>
      <span class="mx-1">/</span>
      <NuxtLink to="/resources/case-study">Case Studies</NuxtLink>
      <span class="mx-1">/</span>
      <span>{{ client || "Case Studies" }}</span>
    </nav>
    <h1 class="text-2xl font-bold">
      {{ title || breadcrumbTitle || "Case Study" }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  client?: string;
  breadcrumbTitle?: string;
}>();
</script>
