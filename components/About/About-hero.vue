<template>
  <div class="relative w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center overflow-hidden">
    <!-- background image -->
    <img src="/images/About/download.jpg" alt="About Hero" class="absolute inset-0 w-full h-full object-cover object-center z-0" />
    <!-- dark overlay for image -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <!-- faint rounded-square overlay -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div class="w-32 h-32 sm:w-40 sm:h-40 bg-black/25 rounded-2xl blur-sm"></div>
    </div>
    <div class="relative z-10 px-4 sm:px-6 py-10 sm:py-20 text-center max-w-5xl w-full">
      <h1 class="text-white leading-tight drop-shadow">
        Everyday, millions of deliveries are set in motion.
        Each one is a promise
      </h1>
      <p class="mt-4 text-white text-base sm:text-lg md:text-2xl font-medium drop-shadow">“We'll get it to you”</p>
    </div>
</div>
</template>

<script lang="ts" setup>

</script>

<style scoped> 
</style>