<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <CaseStudyHeader />
    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
    <div v-if="caseStudies.length > 0">
      <!-- Display the first case study or loop through them -->
      <div v-for="caseStudy in caseStudies.slice(0, 1)" :key="caseStudy.id">
        <CaseStudyHero
          :image="caseStudy.featured_image?.url || ''"
          :client="caseStudy.client?.name || caseStudy.title"
          :industry="caseStudy.sidebar?.industry || 'Industry'"
          :location="caseStudy.sidebar?.location || 'Location'"
          :engagementType="caseStudy.sidebar?.engagement_type || ''"
          :implementationPeriod="caseStudy.sidebar?.implementation_period || ''"
          :solution="caseStudy.content?.introduction || ''"
        />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div class="lg:col-span-2">
            <div class="prose max-w-none">
              <div
                v-if="caseStudy.content?.introduction"
                v-html="decodeHtml(caseStudy.content.introduction)"
              ></div>
              <!-- Key takeaway, road ahead and testimonial (use components if data available) -->
              <div v-if="caseStudy.content?.key_takeaway">
                <CaseStudyKeyTakeaway
                  :takeaway="caseStudy.content.key_takeaway"
                />
              </div>
              <div v-if="caseStudy.content?.the_road_ahead">
                <CaseStudyRoadAhead
                  :roadAhead="caseStudy.content.the_road_ahead"
                />
              </div>
              <div
                v-if="caseStudy.client?.quote || caseStudy.content?.testimonial"
              >
                <CaseStudyTestimonial
                  :testimonial="
                    caseStudy.client?.quote ||
                    caseStudy.content?.testimonial ||
                    ''
                  "
                  :author="
                    caseStudy.client?.quote_author ||
                    caseStudy.client?.name ||
                    ''
                  "
                />
              </div>
              <div>
                <!-- Problems: prefer structured component when API returns array, otherwise fall back to raw HTML -->
                <template v-if="Array.isArray(caseStudy.content?.the_problem)">
                  <CaseStudyProblem :problems="caseStudy.content.the_problem" />
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
                  <div v-html="decodeHtml(caseStudy.content.the_problem)"></div>
                </template>

                <!-- Solutions: prefer structured component when API returns array, otherwise fall back to raw HTML -->
                <template v-if="Array.isArray(caseStudy.content?.the_solution)">
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
                    :solutions="htmlListToArray(caseStudy.content.the_solution)"
                  />
                </template>
                <template v-else-if="caseStudy.content?.the_solution">
                  <h3>The solution</h3>
                  <div
                    v-html="decodeHtml(caseStudy.content.the_solution)"
                  ></div>
                </template>

                <!-- Results: structured component if array, otherwise render as html/text -->
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
              </div>
            </div>
          </div>
          <div>
            <!-- Sidebar with post metadata -->
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="font-semibold mb-4">Post Details</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <div>Client: {{ caseStudy.client?.name || "-" }}</div>
                <div>Industry: {{ caseStudy.sidebar?.industry || "-" }}</div>
                <div>Location: {{ caseStudy.sidebar?.location || "-" }}</div>
                <div>
                  Engagement: {{ caseStudy.sidebar?.engagement_type || "-" }}
                </div>
                <div>
                  Implementation:
                  {{ caseStudy.sidebar?.implementation_period || "-" }}
                </div>
                <div>Status: {{ caseStudy.meta?.status || "-" }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!error" class="text-gray-500">Loading case studies...</div>
  </div>
  <Transform />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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
  }
});
</script>
