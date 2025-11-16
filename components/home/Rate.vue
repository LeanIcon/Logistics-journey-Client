<template>
  <div
    class="bg-white rounded-xl shadow-[0_6px_25px_-10px_rgba(0,0,0,0.25)] flex items-center justify-between p-2 lg:p-3 w-full max-w-[300px] md:max-w-[375px] xl:max-w-sm mx-auto"
  >
    <!-- Date -->
    <div
      class="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-3 py-2 text-center"
    >
      <span class="text-gray-900 font-light text-sm">
        {{ stats[0].label }}
      </span>
      <p class="text-black font-semibold leading-none">
        {{ stats[0].value }}
      </p>
    </div>

    <!-- Divider -->
    <div class="flex-1 grid grid-cols-3 divide-x divide-gray-200 text-center">
      <!-- Orders -->
      <div class="px-2">
        <span class="text-[#31353a] font-light">{{ stats[1].label }}</span>
        <p class="text-black font-semibold text-sm">{{ stats[1].value }}</p>
      </div>

      <!-- Time Used -->
      <div class="px-2">
        <span class="text-[#31353a] font-light">{{ stats[2].label }}</span>
        <p class="text-black font-semibold text-sm">{{ stats[2].value }}</p>
      </div>

      <!-- Success Rate -->
      <div class="px-2">
        <span class="text-[#31353a] font-light">{{ stats[3].label }}</span>
        <p
          class="text-green-600 font-semibold text-sm"
          style="color: #24983F;"
        >
          {{ stats[3].value }}
        </p>
      </div>
    </div>
  </div>
</template>


<<script setup lang="ts">
import { useApi } from '~/composables/useApi'
import { ref, onMounted, computed } from 'vue'

const { getPagesBySlug } = useApi()

const heroData = ref<any>(null)

// --- Static fallback stats ---
const fallbackStats = [
  { value: "20", label: "Tue" },
  { value: "12 Packages", label: "Orders" },
  { value: "56 min", label: "Time Used" },
  { value: "83%", label: "Success Rate" }
]

// --- Computed Stats (Dynamic + Fallback) ---
const stats = computed(() => {
  const apiStats = heroData.value?.stats

  if (apiStats && apiStats.length === 4) {
    return apiStats
  }

  return fallbackStats
})

onMounted(async () => {
  try {
    const response = await getPagesBySlug('home')
    const blocks = response?.data?.blocks || []
    const heroBlock = blocks.find((b: any) => b.type === 'Hero')

    if (heroBlock?.data) {
      heroData.value = heroBlock.data
    }
  } catch (error) {
    console.error('Failed to load hero section:', error)
  }
})
</script>

<style scoped>
   p {
    @apply text-[12px] md:text-[14px] font-bold text-black;
  }
   span {
    @apply text-[8px] md:text-[12px];
  }
</style>