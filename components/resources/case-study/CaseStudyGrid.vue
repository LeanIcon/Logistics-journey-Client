<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <CaseStudyHeader
      :title="caseStudies[0]?.title"
      :client="caseStudies[0]?.client?.name"
      :breadcrumbTitle="caseStudies[0]?.title"
    />
    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
    <div v-if="caseStudies.length > 0">
      <!-- Display the first case study or loop through them -->
      <div v-for="caseStudy in caseStudies.slice(0, 1)" :key="caseStudy.id">
        <CaseStudyHero
          :image="caseStudy.featured_image?.url || ''"
          :client="caseStudy.client?.name || caseStudy.title"
          :clientLogo="caseStudy.client?.logo || ''"
          :industry="caseStudy.sidebar?.industry || 'Industry'"
          :location="caseStudy.sidebar?.location || 'Location'"
          :engagementType="caseStudy.sidebar?.engagement_type || ''"
          :implementationPeriod="caseStudy.sidebar?.implementation_period || ''"
          :introduction="caseStudy.content?.introduction || ''"
        />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 mt-6">
          <div class="lg:col-span-2">
            <div class="prose max-w-none">
              <!-- Key takeaway (kept here) -->
              <section v-if="caseStudy.content?.key_takeaway" id="key-takeaway">
                <CaseStudyKeyTakeaway
                  :takeaway="caseStudy.content.key_takeaway"
                />
              </section>
              <div>
                <!-- Problems: prefer structured component when API returns array, otherwise fall back to raw HTML -->
                <section id="the-problem">
                  <template
                    v-if="Array.isArray(caseStudy.content?.the_problem)"
                  >
                    <CaseStudyProblem
                      :problems="caseStudy.content.the_problem"
                    />
                  </template>
                  <template
                    v-else-if="
                      typeof caseStudy.content?.the_problem === 'string' &&
                      htmlListToArray(caseStudy.content.the_problem).length
                    "
                  >
                    <CaseStudyProblem
                      :problems="htmlListToArray(caseStudy.content.the_problem)"
                    />
                  </template>
                  <template v-else-if="caseStudy.content?.the_problem">
                    <h3>The problem</h3>
                    <div
                      v-html="decodeHtml(caseStudy.content.the_problem)"
                    ></div>
                  </template>
                </section>

                <!-- Solutions: prefer structured component when API returns array, otherwise fall back to raw HTML -->
                <section id="the-solution">
                  <template
                    v-if="Array.isArray(caseStudy.content?.the_solution)"
                  >
                    <CaseStudySolution
                      :solutions="caseStudy.content.the_solution"
                    />
                  </template>
                  <template
                    v-else-if="
                      typeof caseStudy.content?.the_solution === 'string' &&
                      htmlListToArray(caseStudy.content.the_solution).length
                    "
                  >
                    <CaseStudySolution
                      :solutions="
                        htmlListToArray(caseStudy.content.the_solution)
                      "
                    />
                  </template>
                  <template v-else-if="caseStudy.content?.the_solution">
                    <h3>The solution</h3>
                    <div
                      v-html="decodeHtml(caseStudy.content.the_solution)"
                    ></div>
                  </template>
                </section>

                <!-- Results: structured component if array, otherwise render as html/text -->
                <section id="the-result">
                  <template v-if="Array.isArray(caseStudy.content?.the_result)">
                    <CaseStudyResult :results="caseStudy.content.the_result" />
                  </template>
                  <template v-else-if="caseStudy.content?.the_result">
                    <CaseStudyResult
                      :results="
                        Array.isArray(caseStudy.content.the_result)
                          ? caseStudy.content.the_result
                          : htmlListToArray(caseStudy.content.the_result).length
                          ? htmlListToArray(caseStudy.content.the_result)
                          : [decodeHtml(caseStudy.content.the_result)]
                      "
                    />
                  </template>
                </section>

                <!-- After problem/solution/result: Road Ahead and Testimonial (placed last) -->
                <div>
                  <section
                    v-if="caseStudy.content?.the_road_ahead"
                    id="the-road-ahead"
                    class="mt-8"
                  >
                    <CaseStudyRoadAhead
                      :roadAhead="decodeHtml(caseStudy.content.the_road_ahead)"
                    />
                  </section>
                  <section
                    v-if="
                      caseStudy.client?.quote || caseStudy.content?.testimonial
                    "
                    id="testimonial"
                    class="mt-6"
                  >
                    <CaseStudyTestimonial
                      :testimonial="
                        decodeHtml(
                          caseStudy.client?.quote ||
                            caseStudy.content?.testimonial ||
                            ''
                        )
                      "
                      :author="
                        caseStudy.client?.quote_author ||
                        caseStudy.client?.name ||
                        ''
                      "
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- Sidebar: table of contents / post details (click to scroll) -->
            <nav class="bg-white rounded-lg shadow p-4 sticky top-28">
              <!-- <h3 class="font-semibold mb-3">On this page</h3> -->
              <ul class="space-y-2 text-sm">
                <li>
                  <button
                    class="w-full text-left px-3 py-2 border-0 rounded transition-colors focus:outline-none focus:ring-0"
                    :class="{
                      'bg-blue-600 text-white rounded-md':
                        activeId === 'the-problem',
                      'bg-transparent text-black': activeId !== 'the-problem',
                    }"
                    @click="scrollTo('the-problem')"
                  >
                    The Problem
                  </button>
                </li>

                <li>
                  <button
                    class="w-full text-left px-3 py-2 border-0 rounded transition-colors focus:outline-none focus:ring-0"
                    :class="{
                      'bg-blue-600 text-white rounded-md':
                        activeId === 'the-solution',
                      'bg-transparent text-black': activeId !== 'the-solution',
                    }"
                    @click="scrollTo('the-solution')"
                  >
                    What We Did to Solve It
                  </button>
                </li>

                <li>
                  <button
                    class="w-full text-left px-3 py-2 border-0 rounded transition-colors focus:outline-none focus:ring-0"
                    :class="{
                      'bg-blue-600 text-white rounded-md':
                        activeId === 'the-result',
                      'bg-transparent text-black': activeId !== 'the-result',
                    }"
                    @click="scrollTo('the-result')"
                  >
                    The Result
                  </button>
                </li>
                <!-- <li>
                  <button
                    class="w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                    :class="{
                      'bg-blue-600 text-white': activeId === 'key-takeaway',
                    }"
                    @click="scrollTo('key-takeaway')"
                  >
                    Key Takeaway
                  </button>
                </li> -->

                <li>
                  <button
                    class="w-full text-left px-3 py-2 border-0 rounded transition-colors focus:outline-none focus:ring-0"
                    :class="{
                      'bg-blue-600 text-white rounded-md':
                        activeId === 'the-road-ahead',
                      'bg-transparent text-black':
                        activeId !== 'the-road-ahead',
                    }"
                    @click="scrollTo('the-road-ahead')"
                  >
                    The Road Ahead
                  </button>
                </li>
                <!-- <li>
                  <button
                    class="w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                    :class="{
                      'bg-blue-600 text-white': activeId === 'testimonial',
                    }"
                    @click="scrollTo('testimonial')"
                  >
                    Testimonial
                  </button>
                </li> -->
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!error" class="text-gray-500">Loading case studies...</div>
  </div>
  <Transform />
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import {
  fetchCaseStudiesList,
  fetchFeaturedCaseStudy,
  type CaseStudy,
} from "~/api/caseStudies";
import CaseStudyHeader from "./CaseStudyHeader.vue";
import CaseStudyHero from "./CaseStudyHero.vue";
import CaseStudyProblem from "./CaseStudyProblem.vue";
import CaseStudySolution from "./CaseStudySolution.vue";
import CaseStudyResult from "./CaseStudyResult.vue";
import CaseStudyRoadAhead from "./CaseStudyRoadAhead.vue";
import CaseStudyKeyTakeaway from "./CaseStudyKeyTakeaway.vue";
import CaseStudyTestimonial from "./CaseStudyTestimonial.vue";
import Transform from "~/components/home/Transform.vue";

const caseStudies = ref<CaseStudy[]>([]);
const error = ref<string>("");
const loading = ref(true);
const activeId = ref<string>("the-problem");

function scrollTo(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    activeId.value = id;
  }
}

// Decode HTML entities and return a decoded string that can be safely used with v-html.
// Uses DOM when available (client) for robust decoding, falls back to simple replacements on server.
function decodeHtml(input?: string | null) {
  if (!input) return "";
  try {
    if (typeof document !== "undefined") {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = input;
      return textarea.value;
    }
  } catch (e) {
    // ignore and fallback to regex decode
  }
  return String(input)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

// Parse HTML lists (<ul>/<ol>) into a string[] of list item text.
// Returns an empty array when no list items found.
function htmlListToArray(input?: string | null): string[] {
  const raw = decodeHtml(input);
  if (!raw) return [];

  // If running in browser, use DOM to parse reliably
  try {
    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      container.innerHTML = raw;
      const lis = Array.from(container.querySelectorAll("li"));
      if (lis.length) {
        return lis
          .map((li) => li.textContent?.trim() || "")
          .filter((t) => t.length > 0);
      }
    }
  } catch (e) {
    // fallback to regex below
  }

  // Server-side or fallback: extract <li>...</li> via regex
  const liRegex = /<li[^>]*>(.*?)<\/li>/gi;
  const matches: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = liRegex.exec(raw))) {
    // Strip remaining tags from inner HTML
    const inner = m[1] ?? "";
    const text = inner.replace(/<[^>]+>/g, "").trim();
    if (text) matches.push(text);
  }

  // If we found li items via regex, return them
  if (matches.length) return matches;

  // As a last resort, split by <br> or newlines
  const brSplit = raw
    .split(/<br\s*\/?\s*>|\n/)
    .map((s) => s.replace(/<[^>]+>/g, "").trim())
    .filter(Boolean);
  return brSplit.length ? brSplit : [];
}

onMounted(async () => {
  try {
    // Try to fetch the featured case study first for the hero, and also fetch the list
    const [list, featured] = await Promise.allSettled([
      fetchCaseStudiesList(),
      fetchFeaturedCaseStudy(),
    ]);

    if (list.status === "fulfilled" && Array.isArray(list.value)) {
      caseStudies.value = list.value as CaseStudy[];
    }

    // If featured exists, ensure it's first in the array for display
    if (featured.status === "fulfilled" && featured.value) {
      // Put featured at the front (avoid duplicates)
      const f = featured.value as CaseStudy;
      caseStudies.value = [
        f,
        ...caseStudies.value.filter((c) => c.slug !== f.slug),
      ];
    }
  } catch (e: any) {
    error.value = e.message || "Failed to fetch case studies data.";
  } finally {
    loading.value = false;
    // Wait for DOM to render sections, then set up scroll spy
    await nextTick();
    setupScrollSpy();
  }
});

// Scroll spy: observe section headings and update activeId
let _observer: IntersectionObserver | null = null;
function setupScrollSpy() {
  if (typeof window === "undefined") return;
  try {
    const ids = [
      "the-problem",
      "the-solution",
      "the-result",
      "key-takeaway",
      "the-road-ahead",
      "testimonial",
    ];

    if (_observer) {
      _observer.disconnect();
    }

    _observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible section in viewport
        const visible = entries.filter((ent) => ent.isIntersecting);
        if (visible.length && visible[0]?.target) {
          visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          const id = (visible[0].target as HTMLElement).id || "the-problem";
          activeId.value = id;
        }
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) _observer!.observe(el);
    });
  } catch (e) {
    // ignore
  }
}
</script>
