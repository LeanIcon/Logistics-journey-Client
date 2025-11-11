<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Top Reads</h2>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else class="grid md:grid-cols-3 gap-8">
        <div
          v-for="read in topReads"
          :key="read.id"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center mb-4">
            <span
              class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ read.type }}
            </span>
            <span class="text-gray-500 text-sm ml-auto">{{
              new Date(read.published_at).toLocaleDateString()
            }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ read.title }}</h3>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-medium"
            >Read More →</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchTopReads, type Post } from "~/api/posts";

const topReads = ref<Post[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const data = await fetchTopReads();
    topReads.value = data;
  } catch (err) {
    error.value = "Failed to load top reads";
    console.error("Error fetching top reads:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
