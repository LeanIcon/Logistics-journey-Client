<template>
  <section class="relative w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center overflow-hidden">
    <!-- background image -->
    <img src="" alt="" class="absolute inset-0 w-full h-full object-cover object-center z-0" />
    <!-- subtle dark overlay for image -->
    <div class="absolute inset-0 bg-[#E9EFFD] z-0"></div>
    <!-- faint rounded-square overlay -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div class="w-32 h-32 sm:w-40 sm:h-40 bg-[#E9EFFD] rounded-2xl blur-sm"></div>
    </div>
    <div class="highest-width relative text-start z-10 py-10 sm:py-14 w-full">
      <h2 class="">
        {{ policyTitle || 'Privacy Policy' }}
      </h2>
      <p class="mt-4">Latest update {{ formattedDate || '24 September, 2025' }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useApi } from '~/composables/useApi'

const { getPolicyBySlug } = useApi()

const policyTitle = computed(() => {
  // For now, return static title. In future, can fetch from API
  return 'Privacy Policy'
})

const formattedDate = computed(() => {
  // For now, return static date. In future, can format from API response
  return '24 September, 2025'
})
</script>

<style scoped> 
</style>