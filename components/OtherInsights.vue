<template>
  <section class="mt-20">
    <h2 class="text-3xl font-bold mb-8">Other Insights & Updates</h2>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="post in posts"
        :key="post.id"
        class="border rounded-2xl p-4 hover:shadow-lg transition"
      >
        <img
          :src="post.image"
          alt="post image"
          class="w-full h-56 object-cover rounded-xl mb-4"
        />
        <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
        <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="text-blue-600 font-medium hover:underline"
        >
          Read more →
        </NuxtLink>
      </div>
    </div>

    <div class="text-center mt-10">
      <NuxtLink
        to="/blog"
        class="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
      >
        See more blogs
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
