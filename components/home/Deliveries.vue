<template>
  <div class="highest-width bg-[#FAFAFA] py-24">
    <div class="text-center space-y-6 pb-20 mx-auto">
      <h2>The Problem with Deliveries Today</h2>
      <p class="max-w-lg mx-auto">
        Without real-time visibility, your fleet becomes a silent money drain.
        Here’s what it’s costing you today
      </p>
    </div>

    <div
      class="grid md:grid-cols-2 gap-8 lg:gap-16 items-center justify-center"
    >
      <!-- Image Section -->
      <div class="order-2 md:order-1 mx-auto max-w-md">
        <img
          src="/images/Deliveries/Placeholder Image.png"
          alt="Delivery Placeholder"
        />
      </div>

      <!-- Delivery List -->
      <div class="order-1 md:order-2 grid sm:grid-cols-2 gap-8 md:gap-16">
        <div
          v-for="delivery in deliverList"
          :key="delivery.id"
          class="text-center sm:text-start"
        >
          <div class="flex justify-center sm:justify-start">
            <img
              :src="delivery.icon"
              alt="Delivery Icon"
              class="w-12 h-12 mb-4"
            />
          </div>
          <h6 class="text-xl font-semibold mb-4">{{ delivery.title }}</h6>
          <p>{{ delivery.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { deliveries } from "~/data/deliveries.js";

const deliverList = ref(deliveries);
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
