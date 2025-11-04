<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Stay Informed & Inspired</h2>
          <p class="text-lg text-gray-600 mb-6">
            Access our comprehensive collection of resources designed to help
            you navigate the complexities of modern logistics.
          </p>
          <div class="space-y-4">
            <NuxtLink
              to="/resources/blog"
              class="flex items-start hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <div class="bg-purple-100 p-2 rounded-lg mr-4">
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Expert Blog Posts</h3>
                <p class="text-gray-600">
                  Industry insights and best practices from logistics
                  professionals.
                </p>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/resources/case-study"
              class="flex items-start hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <div class="bg-purple-100 p-2 rounded-lg mr-4">
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Success Stories</h3>
                <p class="text-gray-600">
                  Real-world case studies showcasing transformative results.
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Latest Resources</h3>
          <div class="space-y-4">
            <div class="border-l-4 border-purple-600 pl-4">
              <h4 class="font-semibold">
                How Technology is Transforming Logistics
              </h4>
              <p class="text-sm text-gray-600">April 5, 2025 • Automation</p>
            </div>
            <div class="border-l-4 border-purple-600 pl-4">
              <h4 class="font-semibold">
                Streamlining Logistics for E-commerce Giant
              </h4>
              <p class="text-sm text-gray-600">Case Study • E-commerce</p>
            </div>
            <div class="border-l-4 border-purple-600 pl-4">
              <h4 class="font-semibold">
                Enhancing Decision Making in Supply Chain
              </h4>
              <p class="text-sm text-gray-600">April 6, 2025 • AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
