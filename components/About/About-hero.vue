<template> 
  <div class="hidden sm:flex relative w-full min-h-[220px] sm:min-h-[260px]  items-center justify-center overflow-hidden">
    <img src="/images/About/download.jpg" alt="About Hero" class="absolute inset-0 w-full h-full object-cover object-center z-0" />
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <div class="highest-width relative z-10 text-center px-4 sm:px-6 py-10 sm:py-20 max-w-5xl mx-auto">
      <h1 class="text-white drop-shadow">
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
   h1 {
    @apply text-[34px] lg:text-[48px] xl:text-[50px] lg:leading-[60px] font-bold -mt-1;
    }
</style>
