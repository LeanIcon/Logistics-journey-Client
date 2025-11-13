<template>
  <section class="mt-20">
    <!-- Breadcrumb -->
    <nav
      class="flex items-center gap-2 text-sm text-gray-500 mb-6"
      aria-label="Breadcrumb"
    >
      <NuxtLink to="/resources/blog" class="hover:text-blue-600">Blog</NuxtLink>
      <svg
        class="w-4 h-4 opacity-60"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-blue-600">{{ blog.title }}</span>
    </nav>
    <!-- Category + Date -->

    <!-- Title -->
    <h1
      v-if="blog.title"
      class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
    >
      {{ blog.title }}
    </h1>

    <!-- Author + Reading time -->
    <div
      v-if="blog.author?.name || blog.reading_time"
      class="flex items-center gap-3 mb-8 text-gray-600 text-sm"
    >
      <!-- Author, Date, Read Time (inline, subtle) -->
      <div class="flex items-center gap-2 mb-8 text-gray-500 text-sm">
        <span class="font-medium text-gray-900">{{ blog.author?.name }}</span>
        <span v-if="blog.published_at">•</span>
        <span v-if="blog.published_at">
          {{
            new Date(blog.published_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          }}
        </span>
        <span v-if="blog.reading_time">•</span>
        <span v-if="blog.reading_time">{{ blog.reading_time }}</span>
      </div>
    </div>

    <!-- Featured Image -->
    <div v-if="blog.featured_image?.url" class="mb-10">
      <img
        :src="blog.featured_image.url"
        :alt="blog.featured_image.alt || blog.title"
        class="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-sm"
      />
    </div>

    <!-- Blog Body -->
    <article
      v-if="blog.body"
      class="prose prose-lg max-w-none text-gray-700 leading-relaxed"
      v-html="blog.body"
    ></article>

    <!-- Hidden meta data (for SEO or debugging, optional) -->
    <template v-if="false">
      <div>{{ blog.excerpt }}</div>
      <div>{{ blog.type }}</div>
      <div>{{ blog.slug }}</div>
      <div>{{ blog.meta?.description }}</div>
      <div>{{ blog.meta?.keywords }}</div>
    </template>
  </section>
</template>

<script setup>
// Expected blog object structure:
// {
//   id, title, slug, excerpt, body, type,
//   featured_image, author, categories,
//   published_at, reading_time, meta
// }

defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.prose img {
  border-radius: 1rem;
  margin: 1.5rem 0;
}
</style>
