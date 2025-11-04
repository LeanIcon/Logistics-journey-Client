<template>
  <section
    class="bg-linear-to-r from-purple-600 to-purple-800 text-white py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
      <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Discover insights, success stories, and expert knowledge to optimize
        your logistics operations.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/resources/blog"
          class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore Blog
        </NuxtLink>
        <NuxtLink
          to="/resources/case-study"
          class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
        >
          View Case Studies
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
