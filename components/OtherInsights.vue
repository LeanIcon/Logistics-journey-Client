<template>
  <section v-if="posts && posts.length" class="mt-20">
    <div v-if="showHeading" class="max-w-[1200px] mx-auto px-4 text-center mb-10">
      <h2 class="text-3xl font-bold">Other Insights & Updates</h2>
    </div>

    <div class="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-8">
      <div
        v-for="post in posts"
        :key="post.id || post.slug"
        class="border rounded-2xl p-4 hover:shadow-lg transition bg-white"
      >
        <img
          :src="post.featured_image?.url || '/images/About/Image.png'"
          :alt="post.featured_image?.alt || post.title"
          class="w-full h-56 object-cover rounded-xl mb-4"
          loading="lazy"
          @error="onImgError"
        />
        <div class="flex items-center justify-between mb-2">
          <span
            v-if="post.categories && post.categories.length"
            class="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700"
          >
            {{ post.categories[0].name }}
          </span>
          <span class="text-xs text-gray-500">{{
            post.published_at
              ? new Date(post.published_at).toLocaleDateString()
              : ""
          }}</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">{{ post.title }}</h3>
        <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="text-blue-600 font-medium hover:underline"
        >
          Read more →
        </NuxtLink>
      </div>
    </div>

    <div class="w-full flex justify-center mt-8">
      <NuxtLink
        to="/resources/blog"
        class="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        See more blogs
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
  showHeading: {
    type: Boolean,
    default: true,
  },
});

function onImgError(event) {
  const target = event.target;
  if (target && target.tagName === 'IMG') {
    // Only replace if it's not already the fallback to avoid loops
    if (!target.src || !target.src.includes('/images/About/Image.png')) {
      target.src = '/images/About/Image.png';
    }
  }
}
</script>
