<template>
  <div class="max-w-[1440px] mx-auto px-4 pt-8 pb-16">
    <!-- Header: Latest Blog & Top Reads -->
    <div class="flex flex-col lg:flex-row gap-8 mb-12">
      <!-- Latest Blog -->
      <div
        class="bg-white rounded-xl shadow p-6 flex flex-col gap-4 w-full lg:w-[848px] min-h-[833px] max-h-[833px]"
      >
        <h2 class="text-2xl font-semibold mb-4">Latest Blog</h2>
        <img
          src="/images/blog/Ai.jpg"
          alt="Latest Blog"
          class="w-[720px] h-[405px] object-cover rounded-lg mx-auto mb-4"
        />
      </div>

      <!-- Top Reads -->
      <div
        class="bg-white rounded-xl shadow p-6 flex flex-col gap-4 w-full lg:w-[592px] min-h-[833px] max-h-[833px]"
      >
        <h3 class="text-2xl font-semibold mb-4">Top Reads</h3>
        <div class="flex flex-col gap-4">
          <div
            v-for="(read, i) in topReads"
            :key="i"
            class="flex gap-3 items-center bg-white rounded-lg shadow p-3"
          >
            <img
              :src="topReadImages[i]"
              alt="Top Read"
              class="w-[260px] h-[146px] object-cover rounded-md"
            />
            <div class="flex-1">
              <span
                class="block text-xs font-medium mb-1"
                :class="topReadCategoryClass(read.category)"
              >
                {{ read.category }}
              </span>
              <div class="font-semibold text-sm mb-1">{{ read.title }}</div>
              <div class="text-xs text-gray-500">{{ read.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Browse by Categories -->
    <CategoryFilter />
  </div>

  <!-- Other Sections -->
  <!-- <Start /> -->
  <FirefightingSection />
  <Testimonials />
  <Transform />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { blogs, topReads, categories } from "~/data/blog";
import Testimonials from "~/components/home/Testimonials.vue";
import Transform from "~/components/home/Transform.vue";
// import Start from "~/components/home/Start.vue"; // ✅ Corrected import
import FirefightingSection from "~/components/features/FirefightingSection.vue";
import CategoryFilter from "~/components/resources/blog/CategoryFilter.vue";

const blogImages = [
  "/images/blog/Ai.jpg",
  "/images/blog/Aii.jpg",
  "/images/blog/Automation.png",
  "/images/blog/bt.jpg",
  "/images/blog/Tech.png",
];

const topReadImages = [
  "/images/blog/Automation.png",
  "/images/blog/Aii.jpg",
  "/images/blog/bt.jpg",
];

const selectedCategory = ref(categories[0] || "");
const searchQuery = ref("");

const filteredBlogs = computed(() => {
  return blogs.filter((blog) => {
    const matchesCategory = selectedCategory.value
      ? blog.category === selectedCategory.value
      : true;
    const matchesSearch = searchQuery.value
      ? blog.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });
});

function topReadCategoryClass(category: string) {
  if (category === "Automation")
    return "bg-pink-100 text-pink-600 px-2 py-0.5 rounded";
  if (category === "AI" || category === "Artificial Intelligence")
    return "bg-blue-100 text-blue-600 px-2 py-0.5 rounded";
  if (category === "Blockchain")
    return "bg-green-100 text-green-700 px-2 py-0.5 rounded";

  return "bg-gray-100 text-gray-700 px-2 py-0.5 rounded";
}
</script>

<style scoped>
.blog-align-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem;
}

/* Optional: add any custom spacing or shadow adjustments */
</style>
