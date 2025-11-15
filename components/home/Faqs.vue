<template>
  <section class="highest-width bg-white py-20">
    <div class="grid md:grid-cols-2 gap-10">
      <!-- Left Section -->
      <div>
        <h2 class="">
          Frequently Asked<br />Questions
        </h2>
        <p 
          class="mt-6 mb-4 text-gray-700 text-lg leading-relaxed"
          v-html="faqsData?.title || fallbackDescription"
        ></p>
        <NuxtLink to="/faqs">
          <button
            class="inline-flex items-center justify-center bg-white rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50 transition" style="border-color: #E2E8F0;"
          >
            See all
            <span class="ml-2 text-xl">→</span>
          </button>
        </NuxtLink>
      </div>

      <!-- Questions and Answers -->
      <div class="border-t border-[#64748A] -mb-4 divide-y divide-[#64748A]">
        <div
          v-for="(faq, index) in limitedFaqs"
          :key="index"
          class="px-1 py-6 cursor-pointer"
          @click="toggle(index)"
        >
          <div class="flex justify-between items-center">
            <h4 class="text-lg font-normal text-[#102A63]">
              {{ faq.question }}
            </h4>
            <svg
              :class="{'rotate-180': openIndex === index}"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-[#64748A] transition-transform duration-300 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <transition name="accordion">
            <p v-if="openIndex === index" v-html="faq.answer" class="mt-4 text-[#16181B] leading-relaxed">
            </p>
          </transition>
        </div>
         <div class="border-b border-gray-300"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useApi } from "~/composables/useApi";
import { faqs as staticFaqs } from "~/data/faqs"

const { getPagesBySlug } = useApi();
const faqsData = ref<any>(null);
const faqsList = ref(staticFaqs);
const openIndex = ref<number | null>(0);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
}

onMounted(async () => {
  try {
    const response = await getPagesBySlug("home");
    const blocks = response?.data?.blocks || [];
    const faqsBlock = blocks.find((b: any) => b.type === "Faqs");

    if (faqsBlock?.data) {
      const data = faqsBlock.data;

       faqsData.value = {
        title: data.title,
      };

      // Use API FAQ list or fallback
      faqsList.value = data.faqs?.length ? data.faqs : staticFaqs;
    }
  } catch (error) {
    console.error("Failed to load FAQs:", error);
  }
});

const limitedFaqs = computed(() => faqsList.value.slice(0, 5));

const fallbackDescription = `
  Here are answers to the most common questions about 
  <br class="hidden md:block" />
  Logistic Journey and how it can support your logistics operations.
`;

</script>

<style scoped>
h4 {
  font-weight: 400;
}
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
