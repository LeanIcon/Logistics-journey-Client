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
    <div class="highest-width relative text-center z-10 py-10 sm:py-14 w-full">
      <h2 class="">
        Frequently Asked <br> <p class="text-[#225AD6] text-[32px] lg:text-[43px] font-bold pt-2">Questions</p>
      </h2>
      <p class="text-black max-w-2xl mx-auto mt-8">Here are answers to the most common questions about Logistic Journey and how it can support your logistics operations.</p>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  h2 {
    @apply text-[32px] lg:text-[43px] leading-[60px] font-bold ;
  } 
  
  span {
    @apply text-[32px] lg:text-[43px] font-bold;
  }
</style>