<template>
  <div class="max-w-[1440px] mx-auto px-4 pt-10 pb-20">
    <CaseStudyHeader
      :title="caseStudy?.title"
      :client="caseStudy?.client_name"
      :breadcrumbTitle="caseStudy?.title"
    />
    <CaseStudyHero
      :image="caseStudy?.featured_image?.url"
      :client="caseStudy?.client_name"
      :industry="caseStudy?.industry"
      :location="caseStudy?.location"
      :engagementType="caseStudy?.engagement_type"
      :implementationPeriod="caseStudy?.implementation_period"
      :solution="caseStudy?.solution"
    />
    <CaseStudyProblem :problem="caseStudy?.problem" />
    <CaseStudySolution :steps="caseStudy?.solution_steps" />
    <CaseStudyResult :result="caseStudy?.result" />
    <CaseStudyRoadAhead :roadAhead="caseStudy?.road_ahead" />
    <CaseStudyKeyTakeaway :takeaway="caseStudy?.key_takeaway" />
    <CaseStudyTestimonial :testimonial="caseStudy?.testimonial" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchPostBySlug } from "~/api/posts";
import CaseStudyHeader from "~/components/resources/case-study/CaseStudyHeader.vue";
import CaseStudyHero from "~/components/resources/case-study/CaseStudyHero.vue";
import CaseStudyProblem from "~/components/resources/case-study/CaseStudyProblem.vue";
import CaseStudySolution from "~/components/resources/case-study/CaseStudySolution.vue";
import CaseStudyResult from "~/components/resources/case-study/CaseStudyResult.vue";
import CaseStudyRoadAhead from "~/components/resources/case-study/CaseStudyRoadAhead.vue";
import CaseStudyKeyTakeaway from "~/components/resources/case-study/CaseStudyKeyTakeaway.vue";
import CaseStudyTestimonial from "~/components/resources/case-study/CaseStudyTestimonial.vue";

const route = useRoute();
const slug = route.params.slug;
const caseStudy = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    const data = await fetchPostBySlug(slug);
    // Only use if type is case_study
    if (data?.data?.type === "case_study") {
      caseStudy.value = data.data;
    } else {
      throw new Error("Not a case study");
    }
  } catch (err) {
    error.value = err;
    console.error("Error fetching case study:", err);
  }
});

if (error.value || !caseStudy.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Case study not found",
  });
}
</script>
