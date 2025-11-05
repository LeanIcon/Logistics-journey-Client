<template>
  <section class="bg-white py-12 text-center">
    <div class="container mx-auto px-4">
      <span
        class="inline-block bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded"
        >Features</span
      >
      <h2 class="text-4xl font-bold mt-4 text-gray-800">
        Smarter Routes. <br></br>Happier Clients. Lower Costs!
      </h2>
      <p class="mt-4 text-gray-600">
        Logistic Journey gives you real-time tracking, smart route planning, and
        advanced <br></br> reporting — so you can save money and deliver on time, every
        time.
      </p>
      <div class="mt-6 space-x-4">
        <NuxtLink to="/Request_demo">
          <button
            class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Book a Demo
          </button>
        </NuxtLink>
        <NuxtLink to="/contact">
          <button
            class="text-blue-600 border border-blue-600 px-6 py-2 rounded hover:bg-blue-100"
          >
            Talk to Our Team
          </button>
        </NuxtLink>
      </div>
      <!-- Image placeholder -->
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>
