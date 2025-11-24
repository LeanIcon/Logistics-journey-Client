<template>
  <div class="highest-width py-20">
    <h1 class="text-3xl font-bold mb-14">Case Studies</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="caseStudy in caseStudies"
        :key="caseStudy.id"
        :to="`/case-study/${caseStudy.slug}`"
        class="case-study-card border rounded-lg shadow hover:shadow-lg transition-shadow block"
      >
        <img
          :src="caseStudy.content?.banner || '/images/Blog/Tech.png'"
          :alt="caseStudy.content?.banner?.alt || caseStudy.title"
          class="w-full h-48 object-cover rounded-t-md mb-4"
        />
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ caseStudy.title }}</h2>
            <div v-if="caseStudy.client?.name" class="text-gray-700 font-light mb-1">
              Client: {{ caseStudy.client.name }}
            </div>
            <blockquote
              v-if="caseStudy.client?.quote"
              class="font-normal italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-2"
            >
              "{{ caseStudy.client.quote }}" - {{ caseStudy.client.quote_author || "Client" }}
              <span class="font-light" v-if="caseStudy.client.quote_author_title">, {{ caseStudy.client.quote_author_title }}</span>
            </blockquote>
        </div>
      </NuxtLink>
    </div>

    <FeatureCTA class="mt-36"/>
  <!-- <HomeTestimonials /> -->
  </div>
    <HomeTransform />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fetchCaseStudiesList } from '@/api/caseStudies';
import type { CaseStudy } from '@/api/caseStudies';

const caseStudies = ref<CaseStudy[]>([]);

onMounted(async () => {
  try {
    caseStudies.value = await fetchCaseStudiesList();
  } catch (error) {
    console.error('Error fetching case studies:', error);
  }
});
</script>

<style scoped>
.case-study-card {
  background: white;
}
</style>
