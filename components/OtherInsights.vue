<template>
  <div class="grid md:grid-cols-2 gap-8">
    <div
      v-for="post in posts"
      :key="post.id"
      class="border rounded-2xl p-4 hover:shadow-lg transition bg-white"
    >
      <NuxtImg
        :src="post.featured_image?.url || '/images/About/Image.png'"
        :alt="post.featured_image?.alt || post.title"
        class="w-full h-56 object-cover rounded-xl mb-4"
        loading="lazy"
      />
      <div class="flex items-center justify-between mb-2">
        <span
          v-if="post.categories && post.categories.length"
          class="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700"
        >
          {{ post.categories[0].name }}
        </span>
        <span class="text-xs text-gray-500">{{
          new Date(post.published_at).toLocaleDateString()
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
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
