<template>
  <!-- Section4 -->
  <section class="highest-width flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-20 bg-white">
    <!-- Left: Image -->
    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1 relative overflow-hidden rounded-3xl">
      <img 
        class="w-full max-w-2xl rounded-3xl object-cover "
        src="/public/images/Feature/Feature2/phone-map.jpg"
        alt="Feature image"
      />
      <!-- background effect  -->
      <div class="absolute inset-0 -z-10 bg-[#E9EEFF] rounded-3xl scale-105"></div>
    </div>

    <!-- Right: Text and features -->
    <div class="w-full lg:w-1/2 order-1 lg:order-2">
      <h2 class="text-3xl md:text-4xl font-extrabold text-[#23272A] mb-6">
        Empower Drivers On the Go
      </h2>
      <p class="text-[#23272A] text-lg mb-8">
        With the Logistic mobile app, drivers stay connected, informed, and efficient — every step of the way.
      </p>
      <ul class="space-y-6">
        <li class="flex items-start gap-3">
          <span class="mt-1">
            <svg width="20" height="20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#225AD6" />
              <path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span>
            <span class="font-bold text-[#23272A]">Smart Scheduling</span> – Drivers see upcoming and in-progress journeys right from their dashboard.
          </span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1">
            <svg width="20" height="20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#225AD6" />
              <path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span>
            <span class="font-bold text-[#23272A]">Route Guidance</span> – Clear start and destination details with integrated maps for easy navigation.
          </span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1">
            <svg width="20" height="20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#225AD6" />
              <path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span>
            <span class="font-bold text-[#23272A]">Real-time Updates</span> – Orders and delivery stops displayed directly on an interactive map.
          </span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-1">
            <svg width="20" height="20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#225AD6" />
              <path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span>
            <span class="font-bold text-[#23272A]">Seamless Coordination</span> – Journey details, payloads, and progress all accessible in one place.
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* You can fine-tune the background shape to match your sample */
</style>
