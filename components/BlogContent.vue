<template>
  <section class="">
    <!-- Breadcrumb -->
     <div class="flex gap-4 mb-8">
        <NuxtLink to="/resources/blog"><p>Blog</p> </NuxtLink>   
        <p>&gt</p>
        <p class="text-[#225AD6]"> {{ blog?.title }}</p> 
      </div>
  
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
      class="flex items-center gap-3 mb-6 text-gray-600 text-sm"
    >
      <!-- Author, Date, Read Time (inline, subtle) -->
      <div class="flex items-center gap-2 mb-6 text-gray-500 text-sm">
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

    <!-- Featured Image (use fallback when backend image missing) -->
    <div class="mb-10">
      <img
        :src="blog.featured_image"
        :alt="blog.featured_image || blog.title"
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
