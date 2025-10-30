<template>
  
  <section class="highest-width flex flex-col lg:flex-row items-center justify-center gap-9 py-20 bg-white">
    <!-- Left: Image -->
    <div class="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 relative overflow-hidden rounded-3xl">
      <img src="/public/images/Feature/map.jpg" alt="Feature image" class="w-full max-w-2xl rounded-3xl object-cover" />
      <!-- background effect  -->
      <div class="absolute inset-0 -z-10 bg-[#E9EEFF] rounded-3xl scale-105"></div>
    </div>
    <!-- Right: Text and features -->
    <div class="w-full lg:w-1/2 order-1 lg:order-2">
      <h2 class="text-3xl md:text-4xl font-extrabold text-[#23272A] mb-6">A Dashboard That Powers Your <br> Entire Fleet</h2>
      <p class="text-[#23272A] text-lg mb-8">Get full visibility of your logistics operations in one place. Logistic Journey’s dashboard helps you track vehicles, drivers, and deliveries in real-time — so you can reduce costs, prevent delays, and deliver on time, every time.</p>
      <ul class="space-y-6 feature-list">
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-bold feature-title">Real-Time Vehicle Tracking</span> – Monitor every vehicle’s location, route, and status live.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-bold feature-title">Smart Route Optimization</span> – Cut wasted fuel and time with AI-driven route planning.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-bold feature-title">Delivery Performance Insights</span> – Track on-time rates, delays, and customer satisfaction metrics.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-bold feature-title">Driver & Fleet Analytics</span> – Measure driver productivity, vehicle health, and operational costs.</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.feature-list {
  color: #4B5563; /* gray for body text */
}

.feature-title {
  color: #23272A; /* dark title same as heading */
  font-weight: 700;
}

</style>
