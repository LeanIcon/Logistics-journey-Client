<template>
  <section class="py-6 bg-white">
    <div class="max-w-[1440px] mx-auto px-4">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"
      >
        <h2 class="text-xl font-semibold mb-2 md:mb-0">Browse by categories</h2>
        <div class="w-full md:w-72">
          <input
            type="text"
            placeholder="Search"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      <div class="overflow-x-auto pb-2">
        <div class="flex gap-2 min-w-max">
          <button
            v-for="(category, idx) in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-1 rounded-full font-medium whitespace-nowrap transition-colors',
              selectedCategory === category ||
              (selectedCategory === '' && idx === 0)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { categories } from "~/data/blog";
import { ref } from "vue";
const selectedCategory = ref(categories[0] || "");
</script>

<style scoped></style>
