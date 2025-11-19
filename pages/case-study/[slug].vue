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
      :introduction="caseStudy?.content?.introduction"
    />

    <!-- Main content + sidebar (table of contents) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 mt-6">
      <div class="lg:col-span-2">
        <div class="prose max-w-none">
          <section id="the-problem">
            <CaseStudyProblem :problems="problemItems" />
          </section>

          <section id="the-solution">
            <CaseStudySolution :solutions="solutionItems" />
          </section>

          <section id="the-result">
            <CaseStudyResult :results="resultItems" />
          </section>

          <div
            v-if="caseStudy?.content?.the_road_ahead"
            id="the-road-ahead"
            class="mt-8"
          >
            <CaseStudyRoadAhead
              :roadAhead="decodeHtml(caseStudy?.content?.the_road_ahead)"
            />
          </div>

          <section id="key-takeaway">
            <CaseStudyKeyTakeaway
              :takeaway="decodeHtml(caseStudy?.content?.key_takeaway)"
            />
          </section>

          <section id="testimonial">
            <CaseStudyTestimonial
              :testimonial="testimonialText"
              :author="testimonialAuthor"
            />
          </section>
        </div>
      </div>

      <div>
        <!-- Sidebar: table of contents / post details (click to scroll) -->
        <nav class="bg-white rounded-lg shadow p-4 sticky top-28">
          <ul class="space-y-2 text-sm">
            <li>
              <button
                class="w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                :class="{
                  'bg-blue-600 text-white': activeId === 'the-problem',
                }"
                @click="scrollTo('the-problem')"
              >
                The Problem
              </button>
            </li>
            <li>
              <button
                class="w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                :class="{
                  'bg-blue-600 text-white': activeId === 'the-solution',
                }"
                @click="scrollTo('the-solution')"
              >
                What We Did to Solve It
              </button>
            </li>
            <li>
              <button
                class="w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                :class="{ 'bg-blue-600 text-white': activeId === 'the-result' }"
                @click="scrollTo('the-result')"
              >
                The Result
              </button>
            </li>
            <li>
              <button
                class="w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                :class="{
                  'bg-blue-600 text-white': activeId === 'the-road-ahead',
                }"
                @click="scrollTo('the-road-ahead')"
              >
                The Road Ahead
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
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

// Helpers: decode HTML and parse <li> lists to string[] (safe on server)
function decodeHtml(input) {
  if (!input) return "";
  try {
    if (typeof document !== "undefined") {
      const t = document.createElement("textarea");
      t.innerHTML = input;
      return t.value;
    }
  } catch (e) {}
  return String(input)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function htmlListToArray(input) {
  const raw = decodeHtml(input);
  if (!raw) return [];
  try {
    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      container.innerHTML = raw;
      const lis = Array.from(container.querySelectorAll("li"));
      if (lis.length)
        return lis.map((li) => li.textContent?.trim() || "").filter(Boolean);
    }
  } catch (e) {}
  const liRegex = /<li[^>]*>(.*?)<\/li>/gi;
  const matches = [];
  let m;
  while ((m = liRegex.exec(raw))) {
    const inner = m[1] ?? "";
    const text = inner.replace(/<[^>]+>/g, "").trim();
    if (text) matches.push(text);
  }
  if (matches.length) return matches;
  const brSplit = raw
    .split(/<br\s*\/?>|\n/)
    .map((s) => s.replace(/<[^>]+>/g, "").trim())
    .filter(Boolean);
  return brSplit.length ? brSplit : [];
}

// Normalized computed props for child components
const problemItems = computed(() => {
  const raw = caseStudy.value?.content?.the_problem;
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  const items = htmlListToArray(raw);
  return items.length ? items : [decodeHtml(raw)];
});

const solutionItems = computed(() => {
  const raw = caseStudy.value?.content?.the_solution;
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  const items = htmlListToArray(raw);
  return items.length ? items : [decodeHtml(raw)];
});

const resultItems = computed(() => {
  const raw = caseStudy.value?.content?.the_result;
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  const items = htmlListToArray(raw);
  return items.length ? items : [decodeHtml(raw)];
});

const testimonialText = computed(() =>
  decodeHtml(
    caseStudy.value?.client?.quote ||
      caseStudy.value?.content?.testimonial ||
      ""
  )
);

const testimonialAuthor = computed(
  () =>
    caseStudy.value?.client?.quote_author || caseStudy.value?.client?.name || ""
);

// Scroll-to and scroll-spy state
const activeId = ref(null);

function scrollTo(id) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    activeId.value = id;
  }
}

// Observe sections to update activeId while scrolling
if (typeof window !== "undefined") {
  onMounted(() => {
    try {
      window.requestAnimationFrame(() => {
        const ids = [
          "introduction",
          "the-problem",
          "the-solution",
          "the-result",
          "key-takeaway",
          "the-road-ahead",
          "testimonial",
        ];
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((ent) => {
              if (ent.isIntersecting) {
                activeId.value = ent.target.id || null;
              }
            });
          },
          { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
        );
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
      });
    } catch (e) {
      // ignore
    }
  });
}
</script>
