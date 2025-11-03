<template>
    <div>
        <faqs-hero />
        <section class="highest-width bg-white py-24">
            <div class="max-w-5xl mx-auto gap-10">
            
            <!-- Questions and Answers -->
            <div class="border-t border-[#64748A] -mb-4 divide-y divide-[#64748A]">
                <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="p-6 cursor-pointer"
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
                    class="w-5 h-5 text-gray-700 transition-transform duration-300"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                    </svg>
                </div>

                <transition name="accordion">
                    <p v-if="openIndex === index" class="mt-4 text-gray-700 leading-relaxed">
                    {{ faq.answer }}
                    </p>
                </transition>
                </div>
                <div class="border-b border-gray-300"></div>
            </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = ref([
  {
    question: 'What is last–mile delivery?',
    answer:
      'Last-mile delivery is the final step of the logistics process — when goods move from a warehouse, depot, or hub to the customer’s final destination. It’s called the last mile because it’s the last (and often most complex) part of the delivery chain. This stage directly impacts customer satisfaction, delivery costs, and brand reputation — which is why optimising it is so critical.'
  },
  {
    question: 'Why is last–mile delivery so expensive in South Africa?',
    answer: 'Last-mile delivery is the final step of the logistics process — when goods move from a warehouse, depot, or hub to the customer’s final destination. It’s called the last mile because it’s the last (and often most complex) part of the delivery chain. This stage directly impacts customer satisfaction, delivery costs, and brand reputation — which is why optimising it is so critical.'
  },
  {
    question: 'How can logistics companies reduce last–mile delivery costs?',
    answer: ''
  },
  {
    question: 'What are the biggest challenges in last–mile delivery in South Africa?',
    answer: ''
  },
  {
    question: 'What does real–time delivery tracking mean?',
    answer: ''
  }
])
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
