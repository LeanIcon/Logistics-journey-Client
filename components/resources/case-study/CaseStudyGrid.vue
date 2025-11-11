<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <CaseStudyHeader />
    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
    <div v-if="caseStudy">
      <CaseStudyHero
        :image="caseStudy.featured_image?.url || ''"
        :client="caseStudy.title"
        :industry="caseStudy.categories?.[0]?.name || 'Technology'"
        :location="'Global'"
        :engagementType="'Consulting'"
        :implementationPeriod="'3 months'"
        :solution="caseStudy.excerpt"
      />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div class="lg:col-span-2">
          <div class="prose max-w-none" v-html="caseStudy.body"></div>
        </div>
        <div>
          <!-- Sidebar with post metadata -->
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-semibold mb-4">Post Details</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <div>Author: {{ caseStudy.author?.name }}</div>
              <div>
                Published:
                {{ new Date(caseStudy.published_at).toLocaleDateString() }}
              </div>
              <div>Reading Time: {{ caseStudy.reading_time }}</div>
              <div>
                Categories:
                {{ caseStudy.categories?.map((c) => c.name).join(", ") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!error" class="text-gray-500">Loading case study...</div>
  </div>
  <Transform />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchCaseStudy, type Post } from "~/api/posts";
import CaseStudyHeader from "./CaseStudyHeader.vue";
import CaseStudyHero from "./CaseStudyHero.vue";
import CaseStudyProblem from "./CaseStudyProblem.vue";
import CaseStudySolution from "./CaseStudySolution.vue";
import CaseStudyResult from "./CaseStudyResult.vue";
import CaseStudyRoadAhead from "./CaseStudyRoadAhead.vue";
import CaseStudyKeyTakeaway from "./CaseStudyKeyTakeaway.vue";
import CaseStudyTestimonial from "./CaseStudyTestimonial.vue";
import Transform from "~/components/home/Transform.vue";

const caseStudy = ref<Post | null>(null);
const error = ref<string>("");
const loading = ref(true);

onMounted(async () => {
  try {
    const data = await fetchCaseStudy();
    caseStudy.value = data;
  } catch (e: any) {
    error.value = e.message || "Failed to fetch case study data.";
  } finally {
    loading.value = false;
  }
});
</script>
