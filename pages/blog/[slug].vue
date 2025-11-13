<template>
  <div class="max-w-[1440px] mx-auto px-4 pt-10 pb-20">
    <div v-if="!blog && !blogError" class="text-center py-10 text-gray-400">
      Loading blog...
    </div>
    <div v-else-if="blogError" class="text-center py-10 text-red-500">
      Failed to load blog post.
    </div>
    <BlogContent v-else :blog="blog" />
    <OtherInsights :posts="otherPosts" />
  </div>
</template>

<script setup>
import BlogContent from "~/components/BlogContent.vue";
import OtherInsights from "~/components/OtherInsights.vue";
import { fetchPostBySlug, fetchAllPosts } from "~/api/posts";

const route = useRoute();
const slug = route.params.slug;

const blog = ref(null);
const blogError = ref(null);
const allPosts = ref([]);
const otherPosts = ref([]);

onMounted(async () => {
  try {
    const [blogData, allPostsData] = await Promise.all([
      fetchPostBySlug(slug),
      fetchAllPosts(1),
    ]);
    // Map 'content' to 'body' for compatibility with BlogContent.vue
    if (blogData?.data) {
      blog.value = {
        ...blogData.data,
        body: blogData.data.body || blogData.data.content || "",
      };
    } else {
      blog.value = null;
    }
    allPosts.value = allPostsData.data || [];

    // Exclude current post, pick 2 random others
    const others = allPosts.value.filter((post) => post.slug !== slug);
    // Shuffle and pick 2
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }
    otherPosts.value = others.slice(0, 2);
  } catch (error) {
    blogError.value = error;
    console.error("Error fetching blog data:", error);
  }
});

watch(blogError, (val) => {
  if (val || !blog.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }
});
</script>
