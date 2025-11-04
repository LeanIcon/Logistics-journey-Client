<template>
  <section class="py-8 bg-white">
    <div class="max-w-[1440px] mx-auto px-4">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
      >
        <h2 class="text-2xl font-semibold">Browse by categories</h2>

        <!-- Search Bar -->
        <div class="w-full md:w-72">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      <!-- Category Buttons -->
      <div class="overflow-x-auto pb-4 mb-6">
        <div class="flex gap-2 min-w-max">
          <button
            v-for="(category, idx) in filteredCategories"
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

      <!-- Blog Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(post, index) in filteredPosts"
          :key="index"
          class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
              <span
                class="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700"
                :class="categoryColor(post.category)"
              >
                {{ post.category }}
              </span>
              <p class="text-sm text-gray-500">{{ post.date }}</p>
            </div>

            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Pagination (Static Example) -->
      <div
        class="flex items-center justify-center gap-2 mt-10 text-sm text-gray-600"
      >
        <button class="px-3 py-1 border rounded hover:bg-gray-100">Prev</button>
        <button class="px-3 py-1 border rounded bg-blue-600 text-white">
          1
        </button>
        <button class="px-3 py-1 border rounded hover:bg-gray-100">2</button>
        <button class="px-3 py-1 border rounded hover:bg-gray-100">3</button>
        <button class="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const categories = [
  "All",
  "Automation",
  "Health",
  "Artificial Intelligence",
  "Finance",
  "Marketing",
  "Human Resources",
  "Research and Development",
];

const posts = ref([
  {
    title: "Top 5 Tips to Optimize Your Fleet",
    description:
      "Cut costs, improve delivery times, and boost driver safety with these essential strategies.",
    category: "Tech",
    date: "April 5, 2025",
    image: "https://source.unsplash.com/random/600x400?delivery",
  },
  {
    title: "Innovative Practices for Remote Patient Monitoring",
    description:
      "Enhance patient care and streamline workflows with the latest technology.",
    category: "Health",
    date: "April 12, 2025",
    image: "https://source.unsplash.com/random/600x400?healthcare",
  },
  {
    title: "Navigating the Future of Cryptocurrency",
    description:
      "Understand the trends and regulations shaping the digital currency landscape.",
    category: "Finance",
    date: "April 19, 2025",
    image: "https://source.unsplash.com/random/600x400?crypto",
  },
  {
    title: "AI-Powered Marketing Tools of Tomorrow",
    description:
      "Explore how artificial intelligence is reshaping digital marketing.",
    category: "Artificial Intelligence",
    date: "April 15, 2025",
    image: "https://source.unsplash.com/random/600x400?ai",
  },
  {
    title: "Human Resources in the Age of Automation",
    description:
      "Discover how automation tools are redefining HR operations and employee engagement.",
    category: "Human Resources",
    date: "April 18, 2025",
    image: "https://source.unsplash.com/random/600x400?office",
  },
  {
    title: "The Role of R&D in Future Business Growth",
    description:
      "Learn how investing in research and development drives innovation and success.",
    category: "Research and Development",
    date: "April 22, 2025",
    image: "https://source.unsplash.com/random/600x400?research",
  },
]);

const selectedCategory = ref("All");
const searchTerm = ref("");

// Filter categories based on search input
const filteredCategories = computed(() =>
  categories.filter((c) =>
    c.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

// Filter posts by selected category
const filteredPosts = computed(() => {
  if (selectedCategory.value === "All") return posts.value;
  return posts.value.filter(
    (p) =>
      p.category.toLowerCase() === selectedCategory.value.toLowerCase() ||
      p.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

// Assign colors for category labels
const categoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Tech: "bg-green-100 text-green-600",
    Health: "bg-pink-100 text-pink-600",
    Finance: "bg-blue-100 text-blue-600",
    Marketing: "bg-yellow-100 text-yellow-600",
    "Artificial Intelligence": "bg-purple-100 text-purple-600",
    "Human Resources": "bg-teal-100 text-teal-600",
    "Research and Development": "bg-orange-100 text-orange-600",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
};
</script>

<style scoped></style>
