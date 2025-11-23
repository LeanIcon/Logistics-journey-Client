<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <div class="flex flex-col lg:flex-row items-start gap-6">
      <!-- Left: main image/content -->
      <div class="flex-1">
        <img
          :src="image || '/images/cs2.jpg'"
          alt="Case Study Hero"
          class="rounded-lg w-full h-[340px] object-cover"
        />

        <!-- Introduction beneath the image -->
        <div
          v-if="introduction"
          id="introduction"
          class="mt-4 prose max-w-none text-gray-700"
        >
          <div v-html="decodeHtml(introduction)"></div>
        </div>
      </div>

      <!-- Divider (visible on lg) -->
      <div class="hidden lg:block w-px bg-gray-200 h-[570px]"></div>

      <!-- Right: sidebar card -->
      <div class="w-full lg:w-[440px] h-[570px]">
        <div class="bg-[#E9EFFD80] rounded-xl p-6 h-full">
          <!-- <div v-if="clientLogo" class="flex justify-center mb-2">
              <img
                :src="clientLogo"
                alt="Client Logo"
                class="h-10 object-contain"
              />
            </div> -->

          <!-- b12 image at top of sidebar info -->
          <div class="flex justify-start mb-6">
            <img
              src="/images/b12.png"
              alt="b12"
              class="h-16 w-auto rounded -ml-2"
              you
              need
              to
              use
              material
              icon
            />
          </div>

          <div class="space-y-6">
            <div class="font-semibold text-base text-gray-900">Industry</div>
            <div class="text-sm text-gray-700">{{ industry }}</div>

            <div class="font-semibold text-base text-gray-900 mt-4">
              Location
            </div>
            <div class="text-sm text-gray-700">{{ location }}</div>

            <div class="font-semibold text-base text-gray-900 mt-4">
              Engagement Type
            </div>
            <div class="text-sm text-gray-700">{{ engagementType }}</div>

            <div class="font-semibold text-base text-gray-900 mt-4">
              Implementation Period
            </div>
            <div class="text-sm text-gray-700">
              {{ implementationPeriod }}
            </div>

            <div class="font-semibold text-base text-gray-900 mt-4">
              Solution
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-700 mt-2">
              <img
                src="/public\Navbar\2\Logistics Journey Logo.png"
                alt="Logistics Journey Logo"
                class="h-7 w-auto"
              />
              <span class="font-medium"
                >Logistic Journey Management Platform</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image?: string;
  client?: string;
  clientLogo?: string;
  industry?: string;
  location?: string;
  engagementType?: string;
  implementationPeriod?: string;
  introduction?: string | null;
}>();

function decodeHtml(input?: string | null) {
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
</script>
