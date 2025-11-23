<template>
  <div class="mb-6 flex flex-col gap-2">
    <nav
      class="flex items-center gap-2 text-sm text-gray-500 mb-6"
      aria-label="Breadcrumb"
    >
      <NuxtLink to="/resources/case-study" class="hover:text-blue-600">Case Studies</NuxtLink>
      <svg
        class="w-4 h-4 opacity-60"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-blue-600">{{ title || breadcrumbTitle || 'Case Study' }}</span>
    </nav>

    <h1 class="text-2xl font-bold">{{ title || breadcrumbTitle || "Case Study" }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  client?: string;
  breadcrumbTitle?: string;
}>();
</script>
