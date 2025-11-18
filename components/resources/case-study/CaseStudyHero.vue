<template>
  <div class="bg-[#FAFAFA] rounded-xl p-6">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col lg:flex-row items-start gap-6">
        <!-- Left: main image/content -->
        <div class="flex-1">
          <img
            :src="image || '/images/cs2.jpg'"
            alt="Case Study Hero"
            class="rounded-lg w-full h-[340px] object-cover border border-gray-200"
          />
        </div>

        <!-- Divider (imaginary line) - visible on lg -->
        <div class="hidden lg:block w-px bg-gray-200 h-[320px]"></div>

        <!-- Right: sidebar card -->
        <div class="w-full lg:w-[340px]">
          <div class="bg-grey-50 rounded-xl shadow p-6 h-full">
            <div v-if="clientLogo" class="flex justify-center mb-2">
              <img
                :src="clientLogo"
                alt="Client Logo"
                class="h-10 object-contain"
              />
            </div>

            <!-- b12 image at top of sidebar info -->
            <div class="flex justify-center mb-4">
              <img
                src="/images/b12.png"
                alt="b12"
                class="h-16 w-auto rounded"
              />
            </div>

            <div class="space-y-2">
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
}>();
</script>
