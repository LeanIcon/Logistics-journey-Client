<template>
  <div class="highest-width max-w-7xl mx-auto py-12 px-4 prose prose-blue overflow-auto">
    <div v-if="error" class="text-red-600 font-semibold">
      Error loading case study details.
    </div>
    <div v-else-if="loading" class="text-gray-600">
      Loading case study...
    </div>
    <div v-else-if="caseStudy">
      <div class="mlg:flex gap-12 justify-between items-start mb-12 w-full">
      <div class="mlg:w-[65%]">
        <div class="flex gap-4 mb-8">
          <NuxtLink to="/resources/case-study"><p>Case Study</p> </NuxtLink>   
          <p>&gt</p>
          <p class="text-[#225AD6]"> {{ caseStudy?.title }}</p> 
        </div>
        <h1 class="text-4xl font-bold mb-6">{{ caseStudy?.title }}</h1>
        <img
          :src="caseStudy.content?.banner || '/images/Blog/Tech.png'"
          :alt="caseStudy.content?.banner?.alt || caseStudy.title"
          class="w-full h-64 object-cover rounded mb-6"
        />
        <section v-if="caseStudy.client">
          <p v-html="caseStudy?.content?.introduction"></p>
        </section>
      </div>
     
      <div class="border-r mt-3 self-stretch"></div>
      <div class="mlg:w-[30%]">
        <aside v-if="caseStudy.sidebar" class="mt-3 p-4 bg-[#E9EFFD80] rounded">
          <section v-if="caseStudy.client">
            <!-- <h2 class="text-2xl font-semibold mb-2">Client: {{ caseStudy.client.name }}</h2> -->
            <img
              v-if="caseStudy.client.logo"
              :src="caseStudy.client.logo"
              :alt="caseStudy.client.name"
              class="w-32 mb-6 mlg:mb-20"
            />
            <!-- <blockquote class="italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">
              "{{ caseStudy.client.quote }}" <br />
              <span class="font-semibold">{{ caseStudy.client.quote_author }}</span>,
              <em>{{ caseStudy.client.quote_author_title }}</em>
            </blockquote> -->
          
          </section>
          <ul class="">
            <li class=""><strong>Industry:</strong> {{ caseStudy.sidebar.industry }}</li>
            <li class=""><strong>Location:</strong> {{ caseStudy.sidebar.location }}</li>
            <li class=""><strong>Engagement Type:</strong> {{ caseStudy.sidebar.engagement_type }}</li>
            <li class=""><strong>Implementation Period:</strong> {{ caseStudy.sidebar.implementation_period }}</li>
            <li class=""><strong>Solution:</strong> {{ caseStudy.sidebar.solution }}</li>
          </ul>
        </aside>
      </div>
      </div>
      <section v-if="caseStudy.content" >
       <div>
            <h2>The Problem</h2>
            <div v-html="caseStudy.content.the_problem" class="mb-4"></div>
       </div>
        <div>
            <h2>The Solution</h2>
            <div v-html="caseStudy.content.the_solution" class="mb-4"></div>
       </div>
       <div>
            <h2>The Result</h2>
             <div v-html="caseStudy.content.the_result" class="mb-4"></div>
       </div>
       <div>
            <h2>The Road Ahead</h2>
             <div v-html="caseStudy.content.the_result" class="mb-4"></div>
       </div>


       
       
       
        <div v-html="caseStudy.content.the_road_ahead" class="mb-4"></div>
      </section>
    </div>
    <div v-else>
      <p>Case study not found.</p>
    </div>
  </div>
      <HomeTransform />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCaseStudyBySlug } from '@/api/caseStudies';
import type { CaseStudy } from '@/api/caseStudies';

const route = useRoute();
const slug = route.params.slug as string;

const caseStudy = ref<CaseStudy | null>(null);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    caseStudy.value = await fetchCaseStudyBySlug(slug);
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style>
   

</style>
