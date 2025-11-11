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
        <div v-if="loading" class="text-center text-gray-500">
          Loading categories...
        </div>
        <div v-else-if="error" class="text-center text-red-500">
          {{ error }}
        </div>
        <div
          v-else-if="filteredCategories.length === 0"
          class="text-center text-gray-500"
        >
          No categories found.
        </div>
        <div v-else class="flex gap-2 min-w-max">
          <button
            v-for="(category, idx) in filteredCategories"
            :key="category.id || idx"
            @click="handleCategoryClick(category)"
            :class="[
              'px-4 py-1 rounded-full font-medium whitespace-nowrap transition-colors',
              selectedCategory === category.slug
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- Blog Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="(post, index) in filteredPosts"
          :key="index"
          :to="`/blog/${post.slug}`"
          class="bg-white hover:shadow-lg transition overflow-hidden block"
        >
          <img
            v-if="post.featured_image?.url"
            :src="post.featured_image.url"
            :alt="post.featured_image.alt || post.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
              <span
                class="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700"
                :class="categoryColor(post.categories?.[0]?.name || post.type)"
              >
                {{ post.categories?.[0]?.name || post.type }}
              </span>
              <p class="text-sm text-gray-500">
                {{
                  post.published_at
                    ? new Date(post.published_at).toLocaleDateString()
                    : "Date not available"
                }}
              </p>
            </div>

            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ post.excerpt }}
            </p>
          </div>
        </NuxtLink>
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
import { ref, computed, onMounted } from "vue";
import { fetchCategories, type Category } from "~/api/categories";
import { fetchPostsByCategory, fetchAllPosts, type Post } from "~/api/posts";
const emit = defineEmits(["category-selected"]);

const categories = ref<Category[]>([]);
const posts = ref<Post[]>([]);
const selectedCategory = ref("all");
const searchTerm = ref("");
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    // ✅ Fetch categories
    const categoriesRes = await fetchCategories();
    const categoryList = categoriesRes;

    // ✅ Add "All" category manually
    categories.value = [
      {
        id: 0,
        name: "All",
        slug: "all",
        description: "All categories",
        post_count: 0,
        featured_image: { url: "", alt: "" },
      },
      ...categoryList,
    ];

    // ✅ Load all posts initially
    const postsRes = await fetchAllPosts();
    posts.value = postsRes.data || postsRes;
  } catch (err) {
    error.value = "Failed to load categories and posts";
    console.error("Error loading category filter data:", err);
  } finally {
    loading.value = false;
  }
});

// ✅ Filter categories by search term
const filteredCategories = computed(() =>
  categories.value.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

// ✅ Filter posts by category and search
const filteredPosts = computed(() => {
  let filtered = posts.value;

  if (selectedCategory.value !== "all") {
    filtered = filtered.filter((post) =>
      post.categories?.some((cat) => cat.slug === selectedCategory.value)
    );
  }

  if (searchTerm.value) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }

  return filtered;
});

// ✅ Handle category button click
const handleCategoryClick = async (category: Category) => {
  selectedCategory.value = category.slug;
  emit("category-selected", category.slug);
  try {
    if (category.slug === "all") {
      const postsRes = await fetchAllPosts();
      posts.value = postsRes.data || postsRes;
    } else {
      const postsRes = await fetchPostsByCategory(category.slug);
      posts.value = postsRes.data || postsRes;
    }
  } catch (err) {
    console.error("Error fetching posts for category:", err);
    posts.value = [];
  }
};

// ✅ Assign category label colors
const categoryColor = (categoryName: string) => {
  const colors: Record<string, string> = {
    article: "bg-green-100 text-green-600",
    Tech: "bg-green-100 text-green-600",
    Health: "bg-pink-100 text-pink-600",
    Finance: "bg-blue-100 text-blue-600",
    Marketing: "bg-yellow-100 text-yellow-600",
    "Artificial Intelligence": "bg-purple-100 text-purple-600",
    "Human Resources": "bg-teal-100 text-teal-600",
    "Research and Development": "bg-orange-100 text-orange-600",
    Technology: "bg-purple-100 text-purple-600",
    Business: "bg-indigo-100 text-indigo-600",
    Automation: "bg-pink-100 text-pink-600",
    AI: "bg-blue-100 text-blue-600",
    Blockchain: "bg-green-100 text-green-700",
  };
  return colors[categoryName] || "bg-gray-100 text-gray-700";
};
</script>

<style scoped></style>
