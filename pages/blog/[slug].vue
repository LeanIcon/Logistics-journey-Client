<template>
  <div class="max-w-[1440px] mx-auto px-4 pt-10 pb-20">
    <BlogContent :blog="blog" v-if="blog" />
    <OtherInsights :posts="otherPosts?.data || []" />
    <NewsletterSection />
  </div>
</template>

<script setup>
import BlogContent from "~/components/BlogContent.vue";
import OtherInsights from "~/components/OtherInsights.vue";
import NewsletterSection from "~/components/NewsletterSection.vue";

const route = useRoute();
const slug = route.params.slug;

// Fetch single blog/case study post
const { data: blog, error: blogError } = await useFetch(
  `https://logisticjourney.onrender.com/api/v1/posts/${slug}`
);

// Fetch other posts (excluding current post)
const { data: allPosts } = await useFetch(
  `https://logisticjourney.onrender.com/api/v1/posts?limit=20`
);

// Filter other posts by same categories, excluding current post, limit to 2
const otherPosts = computed(() => {
  if (!allPosts.value?.data || !blog.value) return { data: [] };

  const currentCategories = blog.value.categories?.map((cat) => cat.slug) || [];

  const filtered = allPosts.value.data
    .filter((post) => post.slug !== slug)
    .filter((post) =>
      post.categories?.some((cat) => currentCategories.includes(cat.slug))
    )
    .slice(0, 2);

  return { data: filtered };
});

// Handle 404 if post not found
if (blogError.value || !blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
  });
}
</script>
