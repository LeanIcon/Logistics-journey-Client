<template>
  <div class="max-w-[1440px] mx-auto px-4 pt-10 pb-20">
    <CaseStudyHeader
      :title="caseStudy?.title"
      :client="caseStudy?.client?.name"
      :breadcrumbTitle="caseStudy?.title"
    />
    <CaseStudyHero
      :image="caseStudy?.featured_image?.url"
      :client="caseStudy?.client?.name"
      :clientLogo="caseStudy?.client?.logo"
      :industry="caseStudy?.sidebar?.industry"
      :location="caseStudy?.sidebar?.location"
      :engagementType="caseStudy?.sidebar?.engagement_type"
      :implementationPeriod="caseStudy?.sidebar?.implementation_period"
      :solution="caseStudy?.content?.introduction"
    />
    <CaseStudyProblem :problem="caseStudy?.content?.the_problem" />
    <CaseStudySolution :steps="caseStudy?.content?.the_solution" />
    <CaseStudyResult :result="caseStudy?.content?.the_result" />
    <CaseStudyRoadAhead :roadAhead="caseStudy?.content?.the_road_ahead" />
    <CaseStudyKeyTakeaway :takeaway="caseStudy?.content?.key_takeaway" />
    <CaseStudyTestimonial :testimonial="caseStudy?.client" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { fetchCaseStudyBySlug } from "~/api/caseStudies";
import CaseStudyHeader from "~/components/resources/case-study/CaseStudyHeader.vue";
import CaseStudyHero from "~/components/resources/case-study/CaseStudyHero.vue";
import CaseStudyProblem from "~/components/resources/case-study/CaseStudyProblem.vue";
import CaseStudySolution from "~/components/resources/case-study/CaseStudySolution.vue";
import CaseStudyResult from "~/components/resources/case-study/CaseStudyResult.vue";
import CaseStudyRoadAhead from "~/components/resources/case-study/CaseStudyRoadAhead.vue";
import CaseStudyKeyTakeaway from "~/components/resources/case-study/CaseStudyKeyTakeaway.vue";
import CaseStudyTestimonial from "~/components/resources/case-study/CaseStudyTestimonial.vue";

const route = useRoute();
const slug = String(route.params.slug || "");

// Server-side fetch for SEO using useAsyncData (works in Nuxt 3)
const { data: fetched, error: fetchError } = await useAsyncData(
  `case-study-${slug}`,
  () => fetchCaseStudyBySlug(slug),
  { server: true }
);

const caseStudy = ref(fetched.value ?? null);

if (fetchError.value || !caseStudy.value) {
  throw createError({ statusCode: 404, statusMessage: "Case study not found" });
}
</script>
