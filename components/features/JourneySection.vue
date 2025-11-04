<template>
  <section class="bg-[#F8F8F2] py-12">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold text-gray-800">
          Plan Every Journey With Ease
        </h2>
        <p class="mt-4 text-gray-600">
          Simply customize planning routes with Logistic Journey, which can
          reduce stress and keep drivers on schedule.
        </p>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>Customizable Journey Setup</li>
          <li>Optimize Route Planning</li>
          <li>Cost Management</li>
          <li>Driver Assignment</li>
        </ul>
      </div>
      <div>
        <img
          src="/public/images/feature map/journey creation.png"
          alt="Journey Creation"
          class="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "JourneySection",
};
</script>
