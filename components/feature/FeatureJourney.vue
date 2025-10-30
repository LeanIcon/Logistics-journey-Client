<template>
  
  <section class="highest-width flex flex-col lg:flex-row items-center justify-between gap-9 py-20 bg-gray-50">
    <!-- Left: Text and features -->
    <div class="w-full lg:w-1/2 order-1 lg:order-1">
      <h2 class="text-3xl md:text-4xl font-extrabold text-[#23272A] mb-6">Plan Every Journey With Ease</h2>
      <p class="text-[#23272A] text-lg mb-8">Simple complex logistics planing. With Logistic Journey, you can create, assign, and track delivery routes in minutes - reducing dispatcher stress and keeping drivers on scehdule.</p>
      <ul class="space-y-6 feature-list">
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="text-gray-800"><span class="font-bold  feature-title">Customizable Journey Setup</span> – Define routes, assign drivers, and set delivery dates with just a few clicks.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-bold feature-title">Order Integration</span> – Import and manage orders directly within each journey.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-bold feature-title">Cost Tracking</span> – Automatically calculate delivery, fuel, and extra costs for better budget control.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#225AD6"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span><span class="font-extrabold feature-title">Driver & Vehicle Assignment</span> – Ensure the right driver and vehicle are matcherd for each job.</span>
        </li>
      </ul>
    </div>

    

  <div class="w-full lg:w-1/2 flex flex-col order-2 lg:order-2 mb-10 lg:mb-20 md:w-2/3 lg:mr-20">
  <!-- Desktop form image -->
  <div class="items-center justify-end hidden md:flex col-span-1">
    <img
      class="w-full max-w-2xl rounded-3xl object-cover"
      src="/public/images/Feature/Feature2/form.jpg"
      alt="Feature image"
    />
  </div>

  <!-- Mobile image  -->
  <div class="flex justify-center md:hidden relative overflow-hidden rounded-3xl px-4">
    <img
      class="w-full rounded-3xl object-cover"
      src="/public/images/Feature/Feature2/Feature5/1.jpg"
      alt="Feature image"
    />
  </div>

  <!-- Desktop second image -->
  <div class="hidden md:flex justify-start w-full lg:-mt-46 -mt-43 pr-[70] lg:-ml-10">
    <img
      class="w-[80%] h-[80%] object-cover rounded-md"
      src="/public/images/Feature/Feature2/Feature3/Feature4/3.jpg"
      alt="Feature image"
    />
  </div>
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


