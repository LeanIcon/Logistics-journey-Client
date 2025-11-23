p
<template>
  <div class="highest-width mx-auto px-4 mt-24 pb-16">
    <!-- Header: Latest Blog & Top Reads -->
    <div class="flex flex-col lg:flex-row gap-8 mb-12">
      <!-- Latest Blog -->
      <div class="bg-white flex flex-col gap-4 w-full lg:w-[848px]">
        <h2 class="text-2xl font-semibold mb-4">Latest Blog</h2>

        <div v-if="loading" class="text-center">Loading latest blog...</div>
        <div v-else-if="error" class="text-center text-red-500">
          {{ error }}
        </div>

        <div v-else-if="latestPost">
          <NuxtLink :to="`/blog/${latestPost.slug}`">
            <img
              :src="latestPost.featured_image?.url || '/images/About/Image.png'"
              :alt="latestPost.featured_image?.alt || latestPost.title"
              class="w-[720px] h-[405px] object-cover rounded-lg mx-auto mb-4 hover:opacity-90 transition-opacity"
            />
          </NuxtLink>
          <h3 class="text-xl font-semibold mb-2">{{ latestPost.title }}</h3>
          <p class="text-gray-600">{{ latestPost.excerpt }}</p>
          <p class="text-sm text-gray-500 mt-2">
            {{ new Date(latestPost.published_at).toLocaleDateString() }}
          </p>
          <NuxtLink
            :to="`/blog/${latestPost.slug}`"
            class="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Read more →
          </NuxtLink>
        </div>
      </div>

      <div class="hidden lg:flex border-r border-[#eeebeb]"></div>

      <!-- Top Reads -->
      <div
        class="bg-white flex flex-col gap-4 w-full lg:w-[592px] min-h-[833px] max-h-[833px]"
      >
        <h2 class="text-2xl font-semibold mb-4">Top Reads</h2>
        <div class="flex flex-col gap-4">
          <NuxtLink
            v-for="(read, i) in topReads"
            :key="i"
            :to="`/blog/${read.slug}`"
            class="flex gap-3 items-center bg-white hover:bg-gray-50 transition-colors p-2 rounded-lg"
          >
            <img
              :src="read.featured_image?.url || '/images/About/Image.png'"
              :alt="read.featured_image?.alt || read.title"
              class="w-[260px] h-[146px] object-cover rounded-md"
            />
            <div class="flex-1">
              <span
                class="inline-block text-xs font-medium mb-1"
                :class="topReadCategoryClass(read.categories?.[0]?.slug || '')"
              >
                {{ read.categories?.[0]?.name || "Uncategorized" }}
              </span>
              <div class="font-semibold text-sm mb-1">{{ read.title }}</div>
              <div class="text-xs text-gray-500 font-light">
                {{ new Date(read.published_at).toLocaleDateString() }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Browse by Categories -->
    <CategoryFilter />
  </div>

  <FeatureCTA class="mb-20"/>
  <!-- <HomeTestimonials /> -->
  <HomeTransform />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchCategories, type Category } from "~/api/categories";
import { fetchTopReads, fetchAllPosts, type Post } from "~/api/posts";
import CategoryFilter from "~/components/resources/blog/CategoryFilter.vue";

const categories = ref<Category[]>([]);
const topReads = ref<Post[]>([]);
const latestPost = ref<Post | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const [categoriesData, topReadsData, allPostsData] = await Promise.all([
      fetchCategories(),
      fetchTopReads(),
      fetchAllPosts(),
    ]);

    // Assign returned arrays/values directly (APIs return arrays here)
    categories.value = categoriesData || [];
    topReads.value = topReadsData || [];
    latestPost.value = allPostsData?.data?.[0] || null;
  } catch (err) {
    error.value = "Failed to load data";
    console.error("Error loading blog data:", err);
  } finally {
    loading.value = false;
  }
});

function topReadCategoryClass(categorySlug: string) {
  // ✅ Defensive check
  if (!Array.isArray(categories.value)) {
    return "bg-gray-100 text-gray-700 px-2 py-0.5 rounded";
  }

  const category = categories.value.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return "bg-gray-100 text-gray-700 px-2 py-0.5 rounded";
  }

  // ✅ Category color map
  const colorMap: Record<string, string> = {
    Automation: "bg-pink-100 text-pink-600 px-2 py-0.5 rounded",
    AI: "bg-blue-100 text-blue-600 px-2 py-0.5 rounded",
    "Artificial Intelligence": "bg-blue-100 text-blue-600 px-2 py-0.5 rounded",
    Blockchain: "bg-green-100 text-green-700 px-2 py-0.5 rounded",
    Technology: "bg-purple-100 text-purple-600 px-2 py-0.5 rounded",
    Business: "bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded",
  };

  return (
    colorMap[category.name] || "bg-gray-100 text-gray-700 px-2 py-0.5 rounded"
  );
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

/* Optional: custom spacing or shadow tweaks */
</style>
