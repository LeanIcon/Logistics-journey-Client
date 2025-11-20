<template>
  <div class="mb-8">
    <h3 class="text-lg font-semibold mb-4">The Result</h3>

    <ul class="space-y-3 text-gray-800">
      <li
        v-for="(item, idx) in results"
        :key="idx"
        class="flex items-start gap-3"
      >
        <!-- Outer blue circle -> smaller inner white circle -> blue checkmark -->
        <span class="flex-shrink-0 mt-1">
          <div
            class="w-5 h-5 rounded-full bg-[#1A73E8] flex items-center justify-center"
          >
            <div
              class="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center"
            >
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 12.5L10 15.5L17 9"
                  stroke="#1A73E8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </span>

        <span class="leading-relaxed text-sm">
          {{ item }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  results: { type: Array as PropType<string[]>, default: () => [] },
});
</script>
