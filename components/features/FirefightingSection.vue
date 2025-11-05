<template>
  <section class="py-12">
    <div class="container mx-auto px-4 grid md:grid-cols-2 items-stretch">
      <div class="bg-blue-600 text-white p-8 rounded-l-lg flex flex-col justify-center">
        <h2 class="text-3xl font-bold">Stop firefighting.<br></br> Start delivering with.<br></br> confidence.</h2>
        <NuxtLink to="/Request_demo">
          <button
            class="mt-6 bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 self-start"
          >
            Book a Demo Now
          </button>
        </NuxtLink>
      </div>
      <div class="bg-white rounded-r-lg overflow-hidden">
        <img
          src="/public/images/feature map/firefight.jpg"
          alt="Firefighting"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FirefightingSection",
};
</script>
