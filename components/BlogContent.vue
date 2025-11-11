<template>
  <section class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-4">{{ blog.title }}</h1>

    <div class="flex items-center gap-4 mb-6">
      <img
        :src="blog.author?.image || '/images/default-avatar.png'"
        alt="author"
        class="w-12 h-12 rounded-full"
      />
      <div>
        <p class="font-medium">{{ blog.author?.name }}</p>
        <p class="text-gray-500 text-sm">
          {{ new Date(blog.created_at).toLocaleDateString() }}
        </p>
      </div>
    </div>

    <img
      v-if="blog.image"
      :src="blog.image"
      alt="blog image"
      class="w-full rounded-2xl mb-8"
    />

    <div class="prose prose-lg max-w-none" v-html="blog.content"></div>
  </section>
</template>

<script setup>
defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>
